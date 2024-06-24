import { prismaClient } from "../application/database.js"
import { validate } from "../validation/validation.js"
import { createPostForumValidation, createReplyForumValidation } from "../validation/forum-validation.js";
import { sendReplyNotification } from "./notification-service.js";

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
            tanggal_upload: true,
        }
    });
}

const createReplyForum = async (request, user) => {
    request.user_nik = user.nik;
    const replyForum = validate(createReplyForumValidation, request);

    const result = await prismaClient.reply.create({
        data: replyForum,
        select: {
            id: true,
            isi: true,
            user_nik: true,
            tanggal_upload: true,
        }
    });

    await sendReplyNotification(request.thread_id, user.nama, request.isi);

    return result;
}

const getThreadForum = async (id) => {
    const idPost = id;
    const post = await prismaClient.thread.findUnique({
        where: {
            id: idPost
        },
        select: {
            id: true,
            judul: true,
            isi: true,
            user_nik: true,
            tanggal_upload: true,
        }
    });

    return post;
}

const getThreadReplies = async (id) => {
    const idThread = id;
    const replies = await prismaClient.reply.findMany({
        where: {
            thread_id: idThread
        },
        select: {
            id: true,
            isi: true,
            user_nik: true,
            tanggal_upload: true,
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
            tanggal_upload: true,
            user: {
                select: {
                    nama: true,
                    foto: true,
                    email: true,
                    nik: true,
                }
            }
        }
    });

    const formattedPosts = await Promise.all(posts.map(async post => {
        const totalThreadReplies = await prismaClient.reply.count({
            where: {
                thread_id: post.id
            }
        });

        return {
            id: post.id,
            judul: post.judul,
            isi: post.isi,
            tanggal_upload: post.tanggal_upload,
            total_reply: totalThreadReplies,
            user: {
                nama: post.user.nama,
                foto: post.user.foto,
                email: post.user.email,
                nik: post.user.nik
            }
        };
    }));

    return formattedPosts;
}


const getThreadAndReplies = async (id) => {
    const idPost = id;
    const post = await prismaClient.thread.findUnique({
        where: {
            id: idPost
        },
        select: {
            id: true,
            judul: true,
            isi: true,
            tanggal_upload: true,
            user: {
                select: {
                    nama: true,
                    foto: true,
                    email: true,
                    nik: true,
                }
            },
            replies: {
                select: {
                    id: true,
                    thread_id: true,
                    isi: true,
                    tanggal_upload: true,
                    user: {
                        select: {
                            nama: true,
                            foto: true,
                            email: true,
                            nik: true,
                        }
                    }
                }
            }
        }
    });

    const totalThreadReplies = await prismaClient.reply.count({
        where: {
            thread_id: idPost
        }
    });

    const formattedPost = {
        id: post.id,
        judul: post.judul,
        isi: post.isi,
        tanggal_upload: post.tanggal_upload,
        total_reply: totalThreadReplies,
        user: {
            nama: post.user.nama,
            foto: post.user.foto,
            email: post.user.email,
            nik: post.user.nik
        },
        replies: post.replies.map(reply => ({
            id: reply.id,
            thread_id: reply.thread_id,
            isi: reply.isi,
            tanggal_upload: reply.tanggal_upload,
            user: {
                nama: reply.user.nama,
                foto: reply.user.foto,
                email: reply.user.email,
                nik: reply.user.nik
            }
        }))
    };

    return formattedPost;
}


const deleteThreadForum = async (id, user) => {
    const idThread = id;

    const thread_author = await prismaClient.thread.findUnique({
        where: {
            id: idThread
        },
        select: {
            user_nik: true
        }
    });
 
    if (thread_author.user_nik !== user.nik && user.role !== "admin") {
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
    const idReply = id;
    const reply_author = await prismaClient.reply.findUnique({
        where: {
            id: idReply
        },
        select: {
            user_nik: true
        }
    });

    if (reply_author.user_nik !== user.nik && user.role !== "admin") {
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
    const idThread = id;

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
    const idReply = id;
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
    updateReplyForum,
    getThreadAndReplies,
}