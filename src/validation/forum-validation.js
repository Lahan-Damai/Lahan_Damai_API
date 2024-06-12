import Joi from 'joi';

const createPostForumValidation = Joi.object({
    judul: Joi.string().max(100).required(),
    isi: Joi.string().required(),
    user_nik: Joi.string().max(16).required(),
});

const createReplyForumValidation = Joi.object({
    thread_id: Joi.string().max(36).required(),
    isi: Joi.string().required(),
    user_nik: Joi.string().max(16).required(),
});

export {
    createPostForumValidation,
    createReplyForumValidation
}