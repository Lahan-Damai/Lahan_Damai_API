import Joi from 'joi';

const createPostEdukasiValidation = Joi.object({
    id: Joi.number().integer().positive(),
    judul: Joi.string().max(150).required(),
    deskripsi: Joi.string().max(255).required(),
    isi: Joi.string().required(),
    publisher: Joi.string().max(50).required(),
    tanggal_upload: Joi.date().iso(),
    sumber: Joi.string(),
});

const updatePostEdukasiValidation = Joi.object({
    judul: Joi.string().max(150),
    deskripsi: Joi.string().max(255),
    isi: Joi.string(),
    publisher: Joi.string().max(50),
    sumber: Joi.string(),
});

export {
    createPostEdukasiValidation,
    updatePostEdukasiValidation   
};
