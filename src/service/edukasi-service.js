import { createPostEdukasiValidation, updatePostEdukasiValidation } from "../validation/edukasi-validation.js";
import { prismaClient } from "../application/database.js"
import { validate } from "../validation/validation.js"

const create = async (request) => {
    const postEdukasi = validate(createPostEdukasiValidation, request);

    return prismaClient.postEdukasi.create({
        data: postEdukasi,
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true
        }
    });
}

const get = async (id) => {
    const idPost = parseInt(id);
    const post = await prismaClient.postEdukasi.findUnique({
        where: {
            id: idPost
        },
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
        }
    })

    return post;
}

const getAll = async () => {
    
    console.log("ajsdflkaflalsdf")
    const posts = await prismaClient.postEdukasi.findMany({
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
        }
    });
    return posts;
}

const update = async (request, id) => {
    const idPost = parseInt(id);
    const data = validate(updatePostEdukasiValidation, request);
    const post = await prismaClient.postEdukasi.update({
        where: {
            id: idPost
        },
        data: data,
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
        }
    })

    return post;
}


const remove = async (id) => {
    const idPost = parseInt(id);
    await prismaClient.postEdukasi.delete({
        where: {
            id: idPost
        },
        select: {
            id: true,
            judul: true,
        }
    })

    return "success";
}

export default {
    create,
    get,
    update,
    remove,
    getAll
}