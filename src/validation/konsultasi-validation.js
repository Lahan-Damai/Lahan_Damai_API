import Joi from 'joi';

const createAhliEdukasiValidation = Joi.object({
    id: Joi.number().integer().positive(),
    nama: Joi.string().max(100).required(),
    bidang: Joi.string().max(50).required(),
    no_wa: Joi.string().max(20).required(),
});

const updateAhliEdukasiValidation = Joi.object({
    nama: Joi.string().max(100).required(),
    bidang: Joi.string().max(50).required(),
    no_wa: Joi.string().max(20).required(),
});

const createUlasanAhliValidation = Joi.object({
    id: Joi.number().integer().positive(),
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
