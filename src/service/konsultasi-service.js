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
            foto : true
        }
    }) 

    return ahlis;
}

const getAllAhliByBidang = async (bidang) => {
    const post = await prismaClient.ahli.findMany({
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
    })

    return post;
}


const getAhli = async (id) => {
    const idAhli = parseInt(id);
    console.log("id");
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
    const idAhli = parseInt(request.params.id);
    const data = validate(updateAhliEdukasiValidation, request.body);

    data.foto = fotosUrl[0];
    console.log(fotosUrl[0]);

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


const removeAhli = async (id) => {
    const idAhli = parseInt(id);
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
            id: true,
            ahli_id: true,
            rating: true,
            user_nik: true,
            isi: true
        }
    });
}   

const getRatingAhli = async (id) => {
    const idAhli = parseInt(id);
    const rating = await prismaClient.ulasanAhli.aggregate({
        _avg: {
            rating: true
        },
        where: {
            ahli_id: idAhli
        }
    })
    return rating;
}

const getUlasanAhli = async (id) => {
    const idAhli = parseInt(id);
    const ulasan = await prismaClient.ulasanAhli.findMany({
        where: {
            ahli_id: idAhli
        },
        select: {
            id: true,
            ahli_id: true,
            rating: true,
            user_nik: true,
            isi: true
        }
    })
    return ulasan;
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
}