import express from "express";
import userController from "../controller/user-controller.js";
import laporanController from "../controller/laporan-controller.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";

const publicRouter = new express.Router();

publicRouter.post('/api/users/register', userController.register);
publicRouter.post('/api/users/login', userController.login);


export {
    publicRouter
}