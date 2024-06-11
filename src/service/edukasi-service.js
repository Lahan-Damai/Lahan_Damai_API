import { createPostEdukasiValidation, updatePostEdukasiValidation } from "../validation/edukasi-validation.js";
import { prismaClient } from "../application/database.js"
import { validate } from "../validation/validation.js"
import { bucket } from "../application/storage.js";

const create = async (request) => {

    const postEdukasi = validate(createPostEdukasiValidation, request.body);

    const result = await prismaClient.postEdukasi.create({
        data: postEdukasi,
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            isRecommended: true,
        }
    });

    addPhotosToArtikel(result.id, request);
    return result;
}

const addPhotosToArtikel = async (id_artikel, req) => {
    const id = parseInt(id_artikel);
    let fotoUrls = [];

    if (!req.files) {
        return "no files provided";
    }

    const countPhotos = await prismaClient.fotoArtikel.count({
        where: {
            id_artikel: id
        }
    });
    
    const countFiles = req.files ? req.files.length : 0;

    if (countFiles + countPhotos > 3) {
        return "failed to add photos, exceeding limit of 3 photos per post";
    }
    

    for(const file of req.files) {
        const blob = bucket.file(`${id}-${file.originalname}`);
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
        await prismaClient.fotoArtikel.createMany({
            data: fotoUrls.map(fotoUrl => ({
                url: fotoUrl,
                id_artikel: id
            }))
        });
    }

    return "success";
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
            isRecommended: true,
            fotos: {
                select: {
                    url: true
                }
            }
        }
    })

    const transformedpost = {
        ...post,
        fotos: post.fotos.map(foto => foto.url)
    }  

    return transformedpost;
}

const getAll = async () => {
    const posts = await prismaClient.postEdukasi.findMany({
        orderBy: {
            tanggal_upload: 'desc'
        },
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
            isRecommended: true,
            fotos: {
                select: {
                    url: true
                }
            }
        }
    });

    const transformedPosts = posts.map(post => ({
        ...post,
        fotos: post.fotos.map(foto => foto.url)
    }))
    return transformedPosts;
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
            isRecommended: true,
        }
    })

    return post;
}

const deleteArtikelPhotos = async (id_artikel) => {
    const id = parseInt(id_artikel);
    const artikelPhotos = await prismaClient.fotoArtikel.findMany({
        where: {
            id_artikel: id
        }
    });

    for (const artikelPhoto of artikelPhotos) {
        const url = artikelPhoto.url;
        const filename = url.split('/').pop();
        const blob = bucket.file(filename);
        await blob.delete();
    }

    await prismaClient.fotoArtikel.deleteMany({
        where: {    
            id_artikel: id
        }
    });

    return "success";
}

const getRecommended = async () => {
    const posts = await prismaClient.postEdukasi.findMany({
        where: {
            isRecommended: true
        },
        select: {
            id: true,
            judul: true,
            deskripsi: true,
            isi: true,
            publisher: true,     
            tanggal_upload: true,
            sumber: true,
            fotos: {
                select: {
                    url: true
                }
            }
        }
    });

    const transformedPosts = posts.map(post => ({
        ...post,
        fotos: post.fotos.map(foto => foto.url)
    }))
    return transformedPosts;
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
    getAll,
    addPhotosToArtikel,
    deleteArtikelPhotos,
    getRecommended
}