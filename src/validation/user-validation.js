import Joi from 'joi';

const registerUserValidation = Joi.object({
  nik: Joi.string().max(16).required(),
  nama: Joi.string().max(100).required(),
  alamat: Joi.string().required(),
  password: Joi.string().min(6).max(100).required(),
  token: Joi.string().max(100).optional()
});


export { registerUserValidation }
