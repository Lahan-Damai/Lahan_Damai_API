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
        const result = await laporanService.getLaporan(req.body.no_sertifikat);
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
        const result = await laporanService.deleteLaporan(req.body.no_sertifikat);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const updateLaporanSengketa = async (req, res, next) => {
    try {
        const result = await laporanService.updateLaporan(req);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteLaporanPhotos = async (req, res, next) => {
    try {
        const result = await laporanService.deleteLaporanPhotos(req.body.no_sertifikat);
        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const addLaporanPhotos = async (req, res, next) => {
    try {
        const result = await laporanService.addPhotosToLaporan(req.body.no_sertifikat, req);
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
    addLaporanPhotos
}