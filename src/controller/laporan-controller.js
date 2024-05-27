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

const getDetailLaporan = async (req, res, next) => {
    try {
        const result = await laporanService.getLaporan(req);
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

export default {
    getKoordinatSengketa,
    getDetailLaporan,
    createLaporanSengketa
}