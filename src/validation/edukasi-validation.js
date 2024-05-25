import Joi from 'joi';

const createPostEdukasiValidation = Joi.object({
    id: Joi.number().integer().positive(),
    judul: Joi.string().max(150).required(),
    deskripsi: Joi.string().max(255).required(),
    isi: Joi.string().required(),
    publisher: Joi.string().max(50).required(),
    tanggalUpload: Joi.date().iso().required(),
}).label('PostEdukasi');

export {
    createPostEdukasiValidation   
};
