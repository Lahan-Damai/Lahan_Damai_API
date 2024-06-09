import Joi from 'joi';

const createAhliEdukasiValidation = Joi.object({
    id: Joi.number().integer().positive(),
    nama: Joi.string().max(100).required(),
    bidang: Joi.string().max(50).required(),
    nomor_wa: Joi.string().max(20).required(),
    deskripsi: Joi.string().max(255).required(),
    lama_kerja: Joi.number().positive().required(),
    foto: Joi.string().allow('')
});

const updateAhliEdukasiValidation = Joi.object({
    nama: Joi.string().max(100),
    bidang: Joi.string().max(50),
    nomor_wa: Joi.string().max(20),
    deskripsi: Joi.string().max(255),
    lama_kerja: Joi.number().positive(),
    foto: Joi.string().allow('')
});

const createUlasanAhliValidation = Joi.object({
    ahli_id: Joi.number().integer().positive().required(),
    rating: Joi.number().required(),
    isi: Joi.string().max(255).required(),
    user_nik: Joi.string().max(100).required(),
})

export {
    createAhliEdukasiValidation,
    updateAhliEdukasiValidation,
    createUlasanAhliValidation   
};
