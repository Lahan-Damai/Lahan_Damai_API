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

const getLaporan = async (no_sertifikat) => {
    const laporan = await prismaClient.laporan.findUnique({
        where: {
            no_sertifikat: no_sertifikat
        },
        select: {
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true 
        }
    })

    laporan.laporan_photos = await getLaporanPhotos(no_sertifikat);

    return laporan;
}

const getLaporanPhotos = async (no_sertifikat) => {
    return prismaClient.fotoLaporan.findMany({
        where: {
            no_sertifikat: no_sertifikat
        },
        select: {
            url: true
        }
    }).then(laporanPhotos => laporanPhotos.map(laporanPhoto => laporanPhoto.url));
}

const addPhotosToLaporan = async (no_sertifikat, req) => {
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
                no_sertifikat: no_sertifikat  
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
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true
        }
    });

    const no_sertifikat = result.no_sertifikat;
    addPhotosToLaporan(no_sertifikat, request);

    return result;
}; 

export default {
    getMapLaporan,
    getLaporan,
    createLaporan,
    addPhotosToLaporan
}