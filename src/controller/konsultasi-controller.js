import konsultasiService from "../service/konsultasi-service.js";

const getAllAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.getAllAhli();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getAllAhliByBidang = async (req, res, next) => {
    try {
        const result = await konsultasiService.getAllAhliByBidang(req.params.bidang);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.createAhli(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.updateAhli(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const removeAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.removeAhli(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.getAhli(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createUlasanAhli = async (req, res, next) => {
    try {
        req.body.user_nik = req.user.nik;
        req.body.ahli_id = req.params.id;
        const result = await konsultasiService.createUlasanAhli(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getRatingAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.getRatingAhli(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getUlasanAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.getUlasanAhli(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const getDetailAhli = async (req, res, next) => {
    try {
        const result = await konsultasiService.getDetailAhli(req.params.id);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteUlasanAhli = async (req, res, next) => {
    try {
        if (!req.body.user_nik) {
            req.body.user_nik = req.user.nik;
        }
        const result = await konsultasiService.deleteUlasanAhli(req.params.id, req.user, req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const addFavorite = async (req, res, next) => {
    try {
        const result = await konsultasiService.addFavorite(req.params.id, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const removeFavorite = async (req, res, next) => {
    try {
        const result = await konsultasiService.removeFavorite(req.params.id, req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getUserFavorite = async (req, res, next) => {
    try {
        const result = await konsultasiService.getUserFavorite(req.user);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    createAhli,
    getAllAhli,
    updateAhli,
    removeAhli,
    getAllAhliByBidang,
    getAhli,
    createUlasanAhli,
    getUlasanAhli,
    getRatingAhli,
    getDetailAhli,
    deleteUlasanAhli,
    addFavorite,
    removeFavorite,
    getUserFavorite
}