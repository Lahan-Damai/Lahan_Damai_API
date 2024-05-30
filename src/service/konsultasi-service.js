import { createAhliEdukasiValidation, updateAhliEdukasiValidation } from "../validation/laporan-validation.js";
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
    const post = await prismaClient.postEdukasi.findMany({
        select: {
            id: true,
            nama: true,
            bidang: true,
            no_WA: true
        }
    })

    return post;
}

const updateAhli = async (id) => {
    const changes = request.body 
    const idAhli = parseInt(request.params.id)    
    const ahli = await prismaClient.postEdukasi.findUnique({
        where: {
            id: idPost
        },
        select: {
            id: true,
            nama: true,
            bidang: true,
            no_WA: true     
        }
    })
    if (!changes.nama) {
        changes.nama = ahli.nama
    }
    if (!changes.bidang) {
        changes.bidang = ahli.bidang
    }
    if (!changes.no_WA) {
        changes.no_WA = ahli.no_WA
    }

    const updatedAhli = validate(updateAhliEdukasiValidation, changes);

    await prismaClient.postEdukasi.update({
        where: {
            id: idPost
        },
        data: {
            nama: updatedAhli.nama,
            bidang: updatedAhli.bidang,
            no_WA: updatedAhli.no_WA,
        }
    })

    return "success";
}


const removeAhli = async (id) => {
    const idAhli = parseInt(id);
    await prismaClient.postEdukasi.delete({
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

export default {
    createAhli,
    getAllAhli,
    updateAhli,
    removeAhli
}