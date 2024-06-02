import Joi from 'joi';

const registerUserValidation = Joi.object({
  nik: Joi.string().pattern(/^\d+$/).max(16).required(),
  email: Joi.string().max(64).required(),
  nama: Joi.string().max(100).required(),
  alamat: Joi.string().required(),
  password: Joi.string().min(6).max(100).required(),
  token: Joi.string().max(100).optional()
});


const loginUserValidation = Joi.object({
    email: Joi.string().max(64).required(),
    password: Joi.string().min(6).max(100).required(),
})

const getUserValidation = Joi.string().max(30).required()

export { 
    registerUserValidation,
    loginUserValidation,
    getUserValidation
}
