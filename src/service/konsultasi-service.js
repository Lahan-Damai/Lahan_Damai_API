import { createAhliEdukasiValidation, updateAhliEdukasiValidation, createUlasanAhliValidation } from "../validation/konsultasi-validation.js";
import { prismaClient } from "../application/database.js"
import { validate } from "../validation/validation.js"

const createAhli = async (request) => {
    const ahli = validate(createAhliEdukasiValidation, request);

    return prismaClient.ahli.create({
        data: ahli,
        select: {
            id: true
        }
    });
}

const getAllAhli = async () => {
    const post = await prismaClient.ahli.findMany({
        select: {
            id: true,
            nama: true,
            bidang: true,
            no_wa: true
        }
    })

    return post;
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
            no_wa: true
        }
    })

    return post;
}


const getAhli = async (id) => {
    const idAhli = parseInt(id);
    const ahli = await prismaClient.ahli.findUnique({
        where: {
            id: idAhli
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            no_wa: true
        }
    })
    return ahli;
}

const updateAhli = async (request) => {
    const changes = request.body 
    const idAhli = parseInt(request.params.id)    
    const ahli = await prismaClient.ahli.findUnique({
        where: {
            id: idAhli
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            no_wa: true     
        }
    })
    if (!changes.nama) {
        changes.nama = ahli.nama
    }
    if (!changes.bidang) {
        changes.bidang = ahli.bidang
    }
    if (!changes.no_wa) {
        changes.no_wa = ahli.no_wa
    }

    const updatedAhli = validate(updateAhliEdukasiValidation, changes);

    await prismaClient.ahli.update({
        where: {
            id: idAhli
        },
        data: {
            nama: updatedAhli.nama,
            bidang: updatedAhli.bidang,
            no_wa: updatedAhli.no_wa,
        }
    })

    return "success";
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