import Joi from 'joi';

const createAhliEdukasiValidation = Joi.object({
    id: Joi.number().integer().positive(),
    nama: Joi.string().max(100).required(),
    bidang: Joi.string().max(50).required(),
    no_WA: Joi.string().max(20).required(),
});

const updateAhliEdukasiValidation = Joi.object({
    nama: Joi.string().max(100).required(),
    bidang: Joi.string().max(50).required(),
    no_WA: Joi.string().max(20).required(),
});

export {
    createAhliEdukasiValidation,
    updateAhliEdukasiValidation   
};
