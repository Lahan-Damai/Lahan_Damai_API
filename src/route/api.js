import express from "express";
import userController from "../controller/user-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import { multerMiddleware } from "../middleware/multer-middleware.js";
import laporanController from "../controller/laporan-controller.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

userRouter.get('/api/users/current', userController.get);
userRouter.delete('/api/users/logout', userController.logout);
userRouter.post('/api/laporan/create', multerMiddleware, laporanController.createLaporanSengketa);
userRouter.get('/api/map/get', laporanController.getKoordinatSengketa);
userRouter.get('/api/laporan/get', laporanController.getLaporan);
userRouter.get('/api/edukasi/:id', edukasiController.getPostEdukasi);
userRouter.get('/api/konsultasi/ahli/', konsultasiController.getAllAhli);
userRouter.get('/api/konsultasi/ahli/:bidang', konsultasiController.getAllAhliByBidang);
userRouter.get('/api/konsultasi/ahli/:id', konsultasiController.getAhli);
userRouter.get('/api/konsultasi/ahli/:id/ulasan', konsultasiController.getUlasanAhli);
userRouter.get('/api/konsultasi/ahli/:id/rating', konsultasiController.getRatingAhli);
userRouter.post('/api/konsultasi/ahli/:id/ulasan', konsultasiController.createUlasanAhli);

export {
    userRouter
}