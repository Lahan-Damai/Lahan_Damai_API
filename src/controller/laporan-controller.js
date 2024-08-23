import laporanService from "../service/laporan-service.js";


const getKoordinatSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.getMapLaporan();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getLaporanSengketa = async (req, res, next) => {
    try {
        const user_nik = req.params.user_nik ? req.params.user_nik : req.user.nik;
        const result = await laporanService.getLaporan(req.params.no_sertifikat, user_nik, req.user.nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const createLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.createLaporan(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteLaporanSengketa = async (req, res, next) => {
    try {
        const user_nik = req.body.user_nik ? req.body.user_nik : req.user.nik;
        const result = await laporanService.deleteLaporan(req.body.no_sertifikat, user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateLaporanSengketa = async (req, res, next) => {
    try {
        const user_nik = req.body.user_nik ? req.body.user_nik : req.user.nik;
        const result = await laporanService.updateLaporan(req.body, req.body.no_sertifikat, user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteLaporanPhotos = async (req, res, next) => {
    try {
        const user_nik = req.body.user_nik ? req.body.user_nik : req.user.nik;
        const result = await laporanService.deleteLaporanPhotos(req.body.no_sertifikat, user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const addLaporanPhotos = async (req, res, next) => {
    try {
        const user_nik = req.body.user_nik ? req.body.user_nik : req.user.nik;
        const result = await laporanService.addPhotosToLaporan(req.body.no_sertifikat, req, user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getAllLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.getAllLaporan();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getLaporanSengketaByUser = async (req, res, next) => {
    try {
        const result = await laporanService.getLaporanByUser(req.user.nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const voteLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.voteLaporan(req.user.nik, req.body.no_sertifikat, req.body.user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const unvoteLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.unvoteLaporan(req.user.nik, req.body.no_sertifikat, req.body.user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}


const getAllLaporanSortByVoteCount = async (req, res, next) => {
    try {
        const result = await laporanService.getAllLaporanSortByVoteCount();
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const addCommentLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.addCommentLaporan(req.user.nik, req.body.user_nik, req.body.no_sertifikat, req.body.comment);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteCommentLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.deleteCommentLaporan(req.body.id_comment);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getCommentLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.getCommentLaporan(req.params.no_sertifikat, req.params.user_nik);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

export default {
    getKoordinatSengketa,
    getLaporanSengketa,
    createLaporanSengketa,
    deleteLaporanSengketa,
    updateLaporanSengketa,
    deleteLaporanPhotos,
    addLaporanPhotos,
    getAllLaporanSengketa,
    getLaporanSengketaByUser,
    voteLaporanSengketa,
    unvoteLaporanSengketa,
    getAllLaporanSortByVoteCount,
    addCommentLaporanSengketa,
    deleteCommentLaporanSengketa,
    getCommentLaporanSengketa
}