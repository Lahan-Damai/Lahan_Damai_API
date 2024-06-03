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
        const result = await konsultasiService.createAhli(req.body);
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

export default {
    createAhli,
    getAllAhli,
    updateAhli,
    removeAhli,
    getAllAhliByBidang,
    getAhli,
    createUlasanAhli,
    getUlasanAhli,
    getRatingAhli
}