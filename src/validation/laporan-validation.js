import Joi from 'joi';


const createLaporanValidation = Joi.object({
    id: Joi.number().integer().positive(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    no_sertifikat: Joi.string().max(150).required(),
    user_nik: Joi.string().max(16).required(),
    deskripsi: Joi.string().required(),
    proses_laporan: Joi.string().required(),
});

const createFotoLaporanValidation = Joi.object({
    url: Joi.string().required(),
    no_sertifikat: Joi.string().max(150).required(),
});


export {
    createLaporanValidation,
    createFotoLaporanValidation
};