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

const getPostEdukasiAll = async (req, res, next) => {
    
    try {
        const result = await edukasiService.getAll();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createPostEdukasi = async (req, res, next) => {
    try {
        const result = await edukasiService.create(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updatePostEdukasi = async (req, res, next) => {
    try {
        const result = await edukasiService.update(req.body, req.params.id);
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

const deleteArtikelPhotos = async (req, res, next) => {
    try {
        const result = await edukasiService.deleteArtikelPhotos(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const addArtikelPhotos = async (req, res, next) => {
    try {
        const result = await edukasiService.addPhotosToArtikel(req.params.id, req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getRecommendedArtikel = async (req, res, next) => {
    try {
        const result = await edukasiService.getRecommended();
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
    deletePostEdukasi,
    getPostEdukasiAll,
    deleteArtikelPhotos,
    addArtikelPhotos,
    getRecommendedArtikel
}