import express from "express";
import userController from "../controller/user-controller.js";
import laporanController from "../controller/laporan-controller.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";

const publicRouter = new express.Router();

publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
publicRouter.get('/api/map/get', laporanController.getKoordinatSengketa);
publicRouter.get('/api/map/get/:id', laporanController.getDetailLaporan);
publicRouter.get('/api/edukasi/:id', edukasiController.getPostEdukasi);
publicRouter.get('/api/konsultasi/ahli/', konsultasiController.getAllAhli);

export {
    publicRouter
}