import Joi from 'joi';


const createLaporanValidation = Joi.object({
    latitude: Joi.number().required(),
    longitude: Joi.number().required(),
    no_sertifikat: Joi.string().max(150).required(),
    user_nik: Joi.string().max(16).required(),
    deskripsi: Joi.string().required(),
    proses_laporan: Joi.string().required(),
    tanggal_lapor: Joi.date().iso(),
});

const createFotoLaporanValidation = Joi.object({
    url: Joi.string().required(),
    no_sertifikat: Joi.string().max(150).required(),
});

const updateLaporanValidation = Joi.object({
    latitude: Joi.number(),
    longitude: Joi.number(),
    no_sertifikat: Joi.string().max(150),
    user_nik: Joi.string().max(16),
    deskripsi: Joi.string(),
    proses_laporan: Joi.string(),
    tanggal_lapor: Joi.date().iso(),
});


export {
    createLaporanValidation,
    createFotoLaporanValidation,
    updateLaporanValidation
};