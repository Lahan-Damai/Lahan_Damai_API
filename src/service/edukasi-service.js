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
            tanggal_upload: true
        }
    })

    return post;
}

const update = async (request) => {
    const changes = request.body 
    const idPost = parseInt(request.params.id)
    const post = await prismaClient.postEdukasi.findUnique({
        where: {
            id: idPost
        },
        select: {
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
        }
    })
    if (!changes.judul) {
        changes.judul = post.judul
    }
    if (!changes.deskripsi) {
        changes.deskripsi = post.deskripsi
    }
    if (!changes.isi) {
        changes.isi = post.isi
    }
    if (!changes.publisher) {
        changes.publisher = post.publisher
    }
    
    const updatedPost = validate(updatePostEdukasiValidation, changes);

    await prismaClient.postEdukasi.update({
        where: {
            id: idPost
        },
        data: {
            judul: updatedPost.judul,
            deskripsi: updatedPost.deskripsi,
            isi: updatedPost.isi,
            publisher: updatedPost.publisher,
        }
    })

    return "success";
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
    remove
}