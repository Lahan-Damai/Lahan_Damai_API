import Joi from 'joi';


const createLaporanValidation = Joi.object({
    id: Joi.number().integer().positive(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    judul: Joi.string().max(150).required(),
    user_nik: Joi.string().max(16).required(),
    deskripsi: Joi.string().required(),
    foto: Joi.string(),
    proses_laporan: Joi.string().required(),
});


export {
    createLaporanValidation
};