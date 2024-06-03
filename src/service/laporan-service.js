import { validate } from "../validation/validation.js"
import { prismaClient } from "../application/database.js"
import { createLaporanValidation, createFotoLaporanValidation } from "../validation/laporan-validation.js";
import { bucket } from "../application/storage.js";

const getMapLaporan = async (request) => {
    const koordinatLaporan = await prismaClient.laporan.findMany({
        select: {
            id: true,
            latitude: true,
            longitude: true,
        }
    })

    return koordinatLaporan;
}

const getLaporan = async (id) => {
    const idLaporan = parseInt(id);
    const laporan = await prismaClient.laporan.findUnique({
        where: {
            id: idLaporan
        },
        select: {
            id: true,
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            foto: true,
            proses_laporan: true 
        }
    })

    return laporan;
}

const addPhotosToLaporan = async (id_laporan, req) => {
    let fotoUrls = [];

    if (req.files) {
        for (const file of req.files) {
            const blob = bucket.file(file.originalname);
            const blobStream = blob.createWriteStream();

            await new Promise((resolve, reject) => {
                blobStream.on('error', (err) => {
                    reject(err);
                });

                blobStream.on('finish', () => {
                    const fotoUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    fotoUrls.push(fotoUrl);
                    resolve();
                });

                blobStream.end(file.buffer);
            });
        }
    }


    if (fotoUrls.length > 0) {
        for (const fotoUrl of fotoUrls) {
            const fotoLaporanData = {
                url: fotoUrl,
                laporan_id: id_laporan  
            };
            const fotoLaporan = validate(createFotoLaporanValidation, fotoLaporanData);
            await prismaClient.fotoLaporan.create({
                data: fotoLaporan
            })
        }
    }
}

const createLaporan = async (request) => {

    const laporanData = {
        no_sertifikat: request.body.no_sertifikat,
        user_nik: request.body.user_nik,
        deskripsi: request.body.deskripsi,
        latitude: parseFloat(request.body.latitude),
        longitude: parseFloat(request.body.longitude),
        proses_laporan: request.body.proses_laporan
    };

    const laporan = validate(createLaporanValidation, laporanData);

    const result = await prismaClient.laporan.create({
        data: laporan,
        select: {
            id: true,
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true
        }
    });

    const id_laporan = result.id;
    addPhotosToLaporan(id_laporan, request);

    return result;
}; 

export default {
    getMapLaporan,
    getLaporan,
    createLaporan,
    addPhotosToLaporan
}