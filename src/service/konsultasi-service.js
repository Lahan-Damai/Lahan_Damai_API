import { createAhliEdukasiValidation, updateAhliEdukasiValidation, createUlasanAhliValidation } from "../validation/konsultasi-validation.js";
import { prismaClient } from "../application/database.js"
import { validate } from "../validation/validation.js"
import { bucket } from "../application/storage.js";

const createAhli = async (request) => {
    const ahli = validate(createAhliEdukasiValidation, request.body);

    const idAhli = await prismaClient.ahli.create({
        data: ahli,
        select: {
            id: true,
        }
    });

    let fotoUrl = [];

    if (request.files) {
        if (request.files.length > 1) {
            return "only one file allowed";
        }
        if (request.files.length === 1) {
            const blob = bucket.file(`${idAhli.id}-${request.files[0].originalname}`);
            const blobStream = blob.createWriteStream();

            await new Promise((resolve, reject) => {
                blobStream.on('error', (err) => {
                    reject(err);
                });

                blobStream.on('finish', () => {
                    const url = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    fotoUrl.push(url);
                    resolve();
                });
                blobStream.end(request.files[0].buffer);
            })
        }
    }

    ahli.foto = fotoUrl[0] ? fotoUrl[0] : "";

    return prismaClient.ahli.update({
        where: {
            id: idAhli.id
        },
        data: {
            foto: ahli.foto
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto: true
        }
    });
}

const getAllAhli = async () => {
    const ahlis = await prismaClient.ahli.findMany({
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto : true,
        }
    })

    const ahlisWithRating = await Promise.all(ahlis.map(async (ahli) => {
        const rating = await getRatingAhli(ahli.id);
        ahli.rating = rating.rating ? rating.rating : 0;
        const reviews = await getUlasanAhli(ahli.id);
        ahli.total_review = reviews.length;
        return ahli;
    }));

    return ahlisWithRating;
}

const getAllAhliByBidang = async (bidang) => {
    const ahlis = await prismaClient.ahli.findMany({
        where: {
            bidang: bidang
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto : true
        }
    });

    const ahlisWithRating = await Promise.all(ahlis.map(async (ahli) => {
        const rating = await getRatingAhli(ahli.id);
        ahli.rating = rating.rating ? rating.rating : 0;
        const reviews = await getUlasanAhli(ahli.id);
        ahli.total_review = reviews.length;
        return ahli;
    }));

    return ahlisWithRating;
}


const getAhli = async (id) => {
    const idAhli = id;
    const ahli = await prismaClient.ahli.findUnique({
        where: {
            id: idAhli
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto: true
        }
    })
    return ahli;
}

const updateAhli = async (request) => {
    let fotosUrl = [];
    if (request.files) {
        if (request.files.length > 1) {
            return "Please upload only 1 file";
        }
        if (request.files.length === 1) {
            const blob = bucket.file(`${request.params.id}-${request.files[0].originalname}`);
            const blobStream = blob.createWriteStream();

            await new Promise((resolve, reject) => {
                blobStream.on('error', (err) => {
                    reject(err);
                });

                blobStream.on('finish', () => {
                    const url = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                    fotosUrl.push(url);
                    resolve();
                });
                blobStream.end(request.files[0].buffer);

            })
        }
    }
    const idAhli = request.params.id;
    const data = validate(updateAhliEdukasiValidation, request.body);

    data.foto = fotosUrl[0];

    const ahli = await prismaClient.ahli.update({
        where: {
            id: idAhli
        },
        data: data,
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto: true
        }
    })
    return ahli;
}

const getDetailAhli = async (id) => {
    const idAhli = id;
    const ahli = await prismaClient.ahli.findUnique({
        where: {
            id: idAhli
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto: true
        }
    });
    const rating = await getRatingAhli(idAhli);
    ahli.rating = rating.rating ? rating.rating : 0;
    ahli.reviews = await getUlasanAhli(idAhli);
    ahli.total_review = ahli.reviews.length;
    return ahli;
}

const removeAhli = async (id) => {
    const idAhli = id;

    const ahli = await prismaClient.ahli.findUnique({
        where: {
            id: idAhli
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            foto: true
        }
    });

    if (!ahli) {
        throw new ResponseError(404, "Ahli tidak ditemukan");
    }

    if (ahli.foto) {
        const filename = ahli.foto.split('/').pop();
        await bucket.file(filename).delete();
    }

    await prismaClient.ahli.delete({
        where: {
            id: idAhli
        },
        select: {
            nama: true,
            bidang: true,
        }
    })

    return "success";
}


const createUlasanAhli = async (request) => {
    const ulasan = validate(createUlasanAhliValidation, request);

    return prismaClient.ulasanAhli.create({
        data: ulasan,
        select: {
            ahli_id: true,
            rating: true,
            user_nik: true,
            isi: true
        }   
    });
}   

const getRatingAhli = async (id) => {
    const idAhli = id;
    const rating = await prismaClient.ulasanAhli.aggregate({
        _avg: {
            rating: true
        },
        where: {
            ahli_id: idAhli
        }
    }); 

    return rating._avg;
}

const getUlasanAhli = async (id) => {
    const idAhli = id;
    const ulasan = await prismaClient.ulasanAhli.findMany({
        where: {
            ahli_id: idAhli
        },
        select: {
            ahli_id: true,
            rating: true,
            user_nik: true,
            isi: true
        }
    })

    const ulasanWithUserDetail = await Promise.all(ulasan.map(async (ulasan) => {
        const user = await prismaClient.user.findUnique({
            where: {
                nik: ulasan.user_nik
            },
            select: {
                nama: true,
                foto: true
            }
        })
        ulasan.nama = user.nama;
        ulasan.foto = user.foto;
        return ulasan;
    }));

    return ulasanWithUserDetail;
}


const deleteUlasanAhli = async (id, user, request) => {
    const idAhli = id;
    const ulasan = await prismaClient.ulasanAhli.findUnique({
        where: {
            ahli_id_user_nik: {
                ahli_id: idAhli,
                user_nik: request.user_nik
            }
        },
        select: {
            user_nik: true,
        }
    })
    if (!ulasan) {
        throw new Error('Ulasan not found');
    }

    if (ulasan.user_nik !== user.nik && user.role !== "admin") {
        throw new Error('Unauthorized');
    }

    await prismaClient.ulasanAhli.delete({
        where: {
            ahli_id_user_nik: {
                ahli_id: idAhli,
                user_nik: request.user_nik
            }
        }
    })

    return "success";
}


const addFavorite = async (idAhli, user) => {
    try {
        await prismaClient.userFavoriteAhli.create({
            data: {
                email_user: user.email,
                id_ahli: idAhli
            }
        })
    } catch (error) {
        throw new Error("already favorited");
    }
    return "success";
}

const removeFavorite = async (idAhli, user) => {
    try {
        await prismaClient.userFavoriteAhli.delete({
            where: {
                email_user_id_ahli: {
                    email_user: user.email,
                    id_ahli: idAhli
                }
            }
        })
    } catch (error) {
        throw new Error("already unfavorited");
    }

    return "success";
}

const getUserFavorite = async (user) => {
    console.log(user)
    const favorites = await prismaClient.userFavoriteAhli.findMany({
        where: {
            email_user: user.email
        },
        select: {
            id_ahli: true
        }
    })
    const data = favorites.map((favorite) => favorite.id_ahli);

    
    const ahliData = await prismaClient.ahli.findMany({
        where: {
            id: {
                in: data
            }
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            nomor_wa: true,
            deskripsi: true,
            lama_kerja: true,
            foto: true
        }
    })
    const ahliDataWithRating = await Promise.all(ahliData.map(async (ahli) => {
        const rating = await getRatingAhli(ahli.id);
        ahli.rating = rating.rating ? rating.rating : 0;
        return ahli;
    }))
    return ahliDataWithRating;
}

export default {
    createAhli,
    getAllAhli,
    updateAhli,
    removeAhli,
    getAllAhliByBidang,
    getAhli,
    createUlasanAhli,
    getUlasanAhli,
    getRatingAhli,
    getDetailAhli,
    deleteUlasanAhli,
    addFavorite,
    removeFavorite,
    getUserFavorite
}