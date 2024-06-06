import { prismaClient } from "../application/database.js"
import { validate } from "../validation/validation.js"
import { createPostForumValidation, createReplyForumValidation } from "../validation/forum-validation.js";


const createThreadForum = async (request, user) => {
    request.user_nik = user.nik;
    const postForum = validate(createPostForumValidation, request);

    return prismaClient.thread.create({
        data: postForum,
        select: {
            id: true,
            judul: true,
            isi: true,
            user_nik: true,
        }
    });
}

const createReplyForum = async (request, user) => {
    request.user_nik = user.nik;
    const replyForum = validate(createReplyForumValidation, request);

    return prismaClient.reply.create({
        data: replyForum,
        select: {
            id: true,
            isi: true,
            user_nik: true,
        }
    });
}

const getThreadForum = async (id) => {
    const idPost = parseInt(id);
    const post = await prismaClient.thread.findUnique({
        where: {
            id: idPost
        },
        select: {
            id: true,
            judul: true,
            isi: true,
            user_nik: true,
        }
    });

    return post;
}

const getThreadReplies = async (id) => {
    const idThread = parseInt(id);
    const replies = await prismaClient.reply.findMany({
        where: {
            thread_id: idThread
        },
        select: {
            id: true,
            isi: true,
            user_nik: true,
        }
    });

    return replies;
}

const getAllThreadForum = async () => {
    const posts = await prismaClient.thread.findMany({
        select: {
            id: true,
            judul: true,
            isi: true,
            user_nik: true,
        }
    });

    return posts;
}

const deleteThreadForum = async (id, user) => {
    const idThread = parseInt(id);

    const thread_author = await prismaClient.thread.findUnique({
        where: {
            id: idThread
        },
        select: {
            user_nik: true
        }
    });
    
    if (thread_author.user_nik !== user.nik) {
        throw new Error('Unauthorized');
    }

    await prismaClient.thread.delete({
        where: {
            id: idThread
        }
    });

    return "success";
}

const deleteReplyForum = async (id, user) => {
    const idReply = parseInt(id);
    const reply_author = await prismaClient.reply.findUnique({
        where: {
            id: idReply
        },
        select: {
            user_nik: true
        }
    });

    if (reply_author.user_nik !== user.nik) {
        throw new Error('Unauthorized');
    }

    await prismaClient.reply.delete({
        where: {
            id: idReply
        }
    })

    return "success";
}


const updateThreadForum = async (id, request, user) => {
    const idThread = parseInt(id);

    const thread_author = await prismaClient.thread.findUnique({
        where: {
            id: idThread
        },
        select: {
            user_nik: true
        }
    });


    if (thread_author.user_nik !== user.nik) {
        throw new Error('Unauthorized');
    }

    await prismaClient.thread.update({
        where: {
            id: idThread
        },
        data: request
    });

    return "success";
}

const updateReplyForum = async (id, request, user) => {
    const idReply = parseInt(id);
    const reply_author = await prismaClient.reply.findUnique({
        where: {
            id: idReply
        },
        select: {
            user_nik: true
        }
    });

    if (reply_author.user_nik !== user.nik) {
        throw new Error('Unauthorized');
    }

    await prismaClient.reply.update({
        where: {
            id: idReply
        },
        data: request
    })

    return "success";
}


export default {
    createThreadForum,
    createReplyForum,
    getThreadForum,
    getThreadReplies,
    getAllThreadForum,
    deleteThreadForum,
    deleteReplyForum,
    updateThreadForum,
    updateReplyForum
}