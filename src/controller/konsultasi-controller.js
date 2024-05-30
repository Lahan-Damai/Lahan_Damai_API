import edukasiService from "../service/konsultasi-service.js";

const getAllAhli = async (req, res, next) => {
    try {
        const result = await edukasiService.getAllAhli();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createAhli = async (req, res, next) => {
    try {
        const result = await edukasiService.createAhli(req.body);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateAhli = async (req, res, next) => {
    try {
        const result = await edukasiService.updateAhli(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const removeAhli = async (req, res, next) => {
    try {
        const result = await edukasiService.removeAhli(req.params.id);
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
    removeAhli
}