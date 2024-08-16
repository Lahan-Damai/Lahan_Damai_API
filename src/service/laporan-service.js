import { validate } from "../validation/validation.js"
import { prismaClient } from "../application/database.js"
import { createLaporanValidation, createFotoLaporanValidation, updateLaporanValidation } from "../validation/laporan-validation.js";
import { bucket } from "../application/storage.js";
import { updateProsesLaporanNotification } from "./notification-service.js";

const getMapLaporan = async () => { 
    const koordinatLaporan = await prismaClient.laporan.findMany({
        select: {
            no_sertifikat: true,
            latitude: true,
            longitude: true,
            user_nik: true
        }
    })

    return koordinatLaporan;
}

const getLaporan = async (no_sertifikat, user_nik) => {
    let countLapor = await prismaClient.laporan.count({
        where: {
            no_sertifikat: no_sertifikat
        }
    });

    const laporan = await prismaClient.laporan.findUnique({
        where: {
            no_sertifikat_user_nik: {
                no_sertifikat: no_sertifikat,
                user_nik: user_nik
            }
        },
        select: {
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true,
            tanggal_lapor: true,
            fotos: {
                select: {
                    url: true
                }
            }
        }
    });

    if (!laporan) {
        return "laporan not found";
    }

    const transformedLaporans = {
        ...laporan,
        fotos: laporan.fotos.map(foto => foto.url),
        count_lapor: countLapor
    }  


    return transformedLaporans;
}

const addPhotosToLaporan = async (no_sertifikat, req, user_nik) => {
    let fotoUrls = [];

    if (!req.files) {
        return "no files provided";
    }

    const countPhotos = await prismaClient.fotoLaporan.count({
        where: {
            no_sertifikat_user_nik: {
                no_sertifikat: no_sertifikat,
                user_nik: user_nik
            }
        }
    });
    
    const countFiles = req.files ? req.files.length : 0;

    if (countFiles + countPhotos > 5) {
        return "failed to add photos, exceeding limit of 5 photos per laporan";
    }

    for (const file of req.files) {
        const blob = bucket.file(`${no_sertifikat}-${file.originalname}`);
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

    
    if (fotoUrls.length > 0) {
        await prismaClient.fotoLaporan.createMany({
            data: fotoUrls.map(fotoUrl => ({
                url: fotoUrl,
                no_sertifikat: no_sertifikat
            }))
        });
    }
    return "success";
}

const createLaporan = async (request) => {
    const no_sertifikat = request.body.no_sertifikat;

    const laporanData = {
        no_sertifikat: no_sertifikat,
        user_nik: request.user.nik,
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
            proses_laporan: true,
            tanggal_lapor: true
        }
    });

    addPhotosToLaporan(no_sertifikat, request);

    return result;
}; 

const deleteLaporan = async (no_sertifikat, user_nik) => {
    
    deleteLaporanPhotos(no_sertifikat);
    
    await prismaClient.laporan.delete({
        where: {
            no_sertifikat_user_nik: {
                no_sertifikat: no_sertifikat,
                user_nik: user_nik
            }
        }
    });
    return "success";
}

const updateLaporan = async (request, no_sertifikat, user_nik) => {
    const data = validate(updateLaporanValidation, request);
    const laporan = await prismaClient.laporan.update({
        where: {
            no_sertifikat_user_nik: {
                no_sertifikat: no_sertifikat,
                user_nik: user_nik
            }
        },
        data: data,
        select: {
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true,
            tanggal_lapor: true
        }
    })

    if (data.proses_laporan) {
        updateProsesLaporanNotification(laporan.user_nik, no_sertifikat, data.proses_laporan);
    }

    
    return laporan;
};

const deleteLaporanPhotos = async (no_sertifikat, user_nik) => {
    const laporanPhotos = await prismaClient.fotoLaporan.findMany({
        where: {
            no_sertifikat_user_nik: {
                no_sertifikat: no_sertifikat,
                user_nik: user_nik
            }
        }
    });

    for (const laporanPhoto of laporanPhotos) {
        const url = laporanPhoto.url;
        const filename = url.split('/').pop();
        const blob = bucket.file(filename);
        await blob.delete();
    }

    await prismaClient.fotoLaporan.deleteMany({
        where: {
            no_sertifikat: no_sertifikat
        }
    });

    return "success";
}

const getAllLaporan = async () => {
    const laporans = await prismaClient.laporan.findMany({
        orderBy: {
            tanggal_lapor: 'desc'
        },
        select: {
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true,
            tanggal_lapor: true,
            fotos: {
                select: {
                    url: true
                }
            }
        }
    });

    const transformedLaporans = laporans.map(laporan => ({
        ...laporan,
        fotos: laporan.fotos.map(photo => photo.url)
    }));

    return transformedLaporans;
};


const getLaporanByUser = async (nik) => {
    const laporans = await prismaClient.laporan.findMany({
        where: {
            user_nik: nik
        },
        orderBy: {
            tanggal_lapor: 'desc'
        },
        select: {
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true,
            tanggal_lapor: true,
            fotos: {
                select: {
                    url: true
                }
            }
        }
    });

    const transformedLaporans = laporans.map(laporan => ({
        ...laporan,
        fotos: laporan.fotos.map(photo => photo.url)
    }));


    return transformedLaporans;

}



export default {
    getMapLaporan,
    getLaporan,
    createLaporan,
    addPhotosToLaporan,
    deleteLaporan,
    updateLaporan,
    deleteLaporanPhotos,
    getAllLaporan,
    getLaporanByUser
}