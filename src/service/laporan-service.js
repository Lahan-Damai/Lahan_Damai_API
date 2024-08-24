import { validate } from "../validation/validation.js"
import { prismaClient } from "../application/database.js"
import { createLaporanValidation, createFotoLaporanValidation, updateLaporanValidation } from "../validation/laporan-validation.js";
import { bucket } from "../application/storage.js";
import { updateProsesLaporanNotification } from "./notification-service.js";

// for parsing BigInt prismaClient @getalllaporansortbyvotecount
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

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

const getLaporan = async (no_sertifikat, user_nik, user_voter_nik) => {
    let countLapor = await prismaClient.laporan.count({
        where: {
            no_sertifikat: no_sertifikat
        }
    });

    const isVoted = await prismaClient.voteSengketa.findUnique({
        where: {
            no_sertifikat_user_nik_user_voter_nik: {
                user_nik: user_nik,
                no_sertifikat: no_sertifikat,
                user_voter_nik: user_voter_nik
            }
        }
    }) ? true : false;

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
            vote: true,
            id: true,
            fotos: {
                select: {
                    url: true
                }
            },
            komentar_sengketa: {
                select: {
                    comment: true,
                    tanggal_upload: true,
                    id: true,
                    user: {
                        select: {
                            nama: true,
                            nik: true,
                            foto: true
                        }
                    }
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
        count_lapor: countLapor,
        is_voted: isVoted
    }  


    return transformedLaporans;
}

const addPhotosToLaporan = async (no_sertifikat, user_nik, req) => {
    let fotoUrls = [];

    if (!req.files) {
        return "no files provided";
    }

    if (!no_sertifikat || !user_nik) {
        return "no no_sertifikat or user_nik provided";
    }

    const countPhotos = await prismaClient.fotoLaporan.count({
        where: {
            no_sertifikat: no_sertifikat,
            user_nik: user_nik
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
                no_sertifikat: no_sertifikat,
                user_nik: user_nik
            }))
        });
    }
    return "success";
}

// helper functions to generate random string
function generateRandomString(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}


const createLaporan = async (request) => {
    const no_sertifikat = request.body.no_sertifikat;
    const user_nik = request.user.nik;
    let id = "";
    let isLaporanExist = false;
    
    do {
        id = generateRandomString();
        isLaporanExist = await prismaClient.laporan.findFirst({
            where: {
                id: id
            }
        }) ? true : false;
    } while (isLaporanExist);

    const laporanData = {
        no_sertifikat: no_sertifikat,
        user_nik: user_nik,
        id: id,
        deskripsi: request.body.deskripsi,
        latitude: parseFloat(request.body.latitude),
        longitude: parseFloat(request.body.longitude),
        proses_laporan: request.body.proses_laporan,
    };

    const laporan = validate(createLaporanValidation, laporanData);

    const result = await prismaClient.laporan.create({
        data: laporan
    });

    addPhotosToLaporan(no_sertifikat, user_nik, request);

    return result;
}; 

const deleteLaporan = async (no_sertifikat, user_nik) => {
    
    deleteLaporanPhotos(no_sertifikat, user_nik);
    
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

const getLaporanById = async (id_laporan, user_voter_nik) => {
    const laporan = await prismaClient.laporan.findUnique({
        where: {
            id: id_laporan
        },
        select: {
            latitude: true,
            longitude: true,
            no_sertifikat: true,
            user_nik: true,
            deskripsi: true,
            proses_laporan: true,
            tanggal_lapor: true,
            vote: true,
            id: true,
            fotos: {
                select: {
                    url: true
                }
            },
            komentar_sengketa: {
                select: {
                    comment: true,
                    tanggal_upload: true,
                    id: true,
                    user: {
                        select: {
                            nama: true,
                            nik: true,
                            foto: true
                        }
                    }
                }
            }
        }
    });

    if (!laporan) {
        return "Laporan not found";
    }

    let countLapor = await prismaClient.laporan.count({
        where: {
            no_sertifikat: laporan.no_sertifikat
        }
    });

    const isVoted = await prismaClient.voteSengketa.findUnique({
        where: {
            no_sertifikat_user_nik_user_voter_nik: {
                user_nik: laporan.user_nik,
                no_sertifikat: laporan.no_sertifikat,
                user_voter_nik: user_voter_nik
            }
        }
    }) ? true : false;

    const transformedLaporans = {
        ...laporan,
        fotos: laporan.fotos.map(foto => foto.url),
        count_lapor: countLapor,
        is_voted: isVoted
    }  


    return transformedLaporans;
}

const deleteLaporanPhotos = async (no_sertifikat, user_nik) => {
    const laporanPhotos = await prismaClient.fotoLaporan.findMany({
        where: {
            no_sertifikat: no_sertifikat,
            user_nik: user_nik
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
            no_sertifikat: no_sertifikat,
            user_nik: user_nik
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
            vote: true,
            id: true,
            fotos: {
                select: {
                    url: true
                }
            },
            komentar_sengketa: {
                select: {
                    comment: true,
                    tanggal_upload: true,
                    id: true,
                    user: {
                        select: {
                            nama: true,
                            nik: true,
                            foto: true
                        }
                    }
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
            vote: true,
            id: true,
            fotos: {
                select: {
                    url: true
                }
            },
            komentar_sengketa: {
                select: {
                    comment: true,
                    tanggal_upload: true,
                    id: true,
                    user: {
                        select: {
                            nama: true,
                            nik: true,
                            foto: true
                        }
                    }
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


const voteLaporan = async (user_voter_nik, no_sertifikat, user_nik) => {
    await prismaClient.voteSengketa.create({
        data: {
            user_voter_nik: user_voter_nik,
            no_sertifikat: no_sertifikat,
            user_nik: user_nik
        }
    })
    return "success";
}

const unvoteLaporan = async (user_voter_nik, no_sertifikat, user_nik) => {
    await prismaClient.voteSengketa.deleteMany({
        where: {
            user_voter_nik: user_voter_nik,
            no_sertifikat: no_sertifikat,
            user_nik: user_nik
        }
    })
    return "success";
}



const getAllLaporanSortByVoteCount = async () => { 
    const laporans = await prismaClient.laporan.findMany({
        orderBy: {
            vote: 'desc'
        }
    })
    return laporans;
}

const addCommentLaporan = async (user_commenter_nik, user_nik, no_sertifikat, comment) => {
    const data = await prismaClient.komentarSengketa.create({
        data: {
            user_commenter_nik: user_commenter_nik,
            user_nik: user_nik,
            no_sertifikat: no_sertifikat,
            comment: comment
        }
    })
    return data;
}

const deleteCommentLaporan = async (id_comment) => {
    await prismaClient.komentarSengketa.deleteMany({
        where: {
            id: id_comment
        }
    })
    return "success";
}

const getCommentLaporan = async (no_sertifikat, user_nik) => {
    const data = await prismaClient.komentarSengketa.findMany({
        where: {
            no_sertifikat: no_sertifikat,
            user_nik: user_nik
        },
        select: {
            comment: true,
            id: true,
            user : {
                select: {
                    nama: true,
                    foto: true
                }
            }
        }
    })
    return data;
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
    getLaporanByUser,
    voteLaporan,
    unvoteLaporan,
    getAllLaporanSortByVoteCount,
    addCommentLaporan,
    deleteCommentLaporan,
    getCommentLaporan,
    getLaporanById
}