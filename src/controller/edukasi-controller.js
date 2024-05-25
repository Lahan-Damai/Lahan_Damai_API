import edukasiService from "../service/edukasi-service.js";

const getPostEdukasi = async (req, res, next) => {
    try {
        console.log(req.params.id)
        const result = await edukasiService.get(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createPostEdukasi = async (req, res, next) => {
    try {
        const result = await edukasiService.create(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updatePostEdukasi = async (req, res, next) => {
    try {
        const result = await edukasiService.update(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deletePostEdukasi = async (req, res, next) => {
    try {
        const result = await edukasiService.remove(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


export default {
    getPostEdukasi,
    createPostEdukasi,
    updatePostEdukasi,
    deletePostEdukasi
}