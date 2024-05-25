import express from "express";
import userController from "../controller/user-controller.js";
import laporanController from "../controller/laporan-controller.js";

const publicRouter = new express.Router();

publicRouter.post('/api/users', userController.register);
publicRouter.post('/api/users/login', userController.login);
publicRouter.get('/api/map/get', laporanController.getKoordinatSengketa);
publicRouter.get('/api/map/get/:id', laporanController.getDetailLaporan);

export {
    publicRouter
}