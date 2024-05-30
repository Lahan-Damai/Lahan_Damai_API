import { validate } from "../validation/validation.js"
import { prismaClient } from "../application/database.js"
import { createLaporanValidation } from "../validation/laporan-validation.js";
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

const getLaporan = async (request) => {
    const idLaporan = parseInt(request.params.id);
    const laporan = await prismaClient.laporan.findUnique({
        where: {
            id: idLaporan
        },
        select: {
            id: true,
            latitude: true,
            longitude: true,
            judul: true,
            user_nik: true,
            deskripsi: true,
            foto: true,
            proses_laporan: true 
        }
    })

    return laporan;
}

const createLaporan = async (request) => {
    let fotoUrl = null;

    if (request.file) {
        const blob = bucket.file(request.file.originalname);
        const blobStream = blob.createWriteStream();

        await new Promise((resolve, reject) => {
            blobStream.on('error', (err) => {
                reject(err);
            });

            blobStream.on('finish', () => {
                fotoUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                resolve();
            });

            blobStream.end(request.file.buffer);
        });
    }

    const laporanData = {
        judul: request.body.judul,
        user_nik: request.body.user_nik,
        deskripsi: request.body.deskripsi,
        latitude: parseFloat(request.body.latitude),
        longitude: parseFloat(request.body.longitude),
        proses_laporan: request.body.proses_laporan,
        foto: fotoUrl
    };

    const laporan = validate(createLaporanValidation, laporanData);

    return await prismaClient.laporan.create({
        data: laporan,
        select: {
            id: true,
            latitude: true,
            longitude: true,
            judul: true,
            user_nik: true,
            deskripsi: true,
            foto: true,
            proses_laporan: true
        }
    });
};



export default {
    getMapLaporan,
    getLaporan,
    createLaporan
}