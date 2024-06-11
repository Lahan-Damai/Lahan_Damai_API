import forumService from "../service/forum-service.js";

const createThreadForum = async (req, res, next) => {
    try {
        const result = await forumService.createThreadForum(req.body, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createReplyForum = async (req, res, next) => {
    try {
        const result = await forumService.createReplyForum(req.body, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getThreadForum = async (req, res, next) => {
    try {
        const result = await forumService.getThreadForum(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getThreadReplies = async (req, res, next) => {
    try {
        const result = await forumService.getThreadReplies(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getAllThreadForum = async (req, res, next) => {
    try {
        const result = await forumService.getAllThreadForum();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const deleteThreadForum = async (req, res, next) => {
    try {
        const result = await forumService.deleteThreadForum(req.params.id, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteReplyForum = async (req, res, next) => {
    try {
        const result = await forumService.deleteReplyForum(req.params.id, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateThreadForum = async (req, res, next) => {
    try {
        const result = await forumService.updateThreadForum(req.params.id, req.body, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateReplyForum = async (req, res, next) => {
    try {
        const result = await forumService.updateReplyForum(req.params.id, req.body, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const getThreadAndReplies = async (req, res, next) => {
    try {
        const result = await forumService.getThreadAndReplies(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
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
    getThreadAndReplies
}