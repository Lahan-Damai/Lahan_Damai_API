import express from "express";
import userController from "../controller/user-controller.js";
import homeController from "../controller/home-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import { multerMiddleware } from "../middleware/multer-middleware.js";
import laporanController from "../controller/laporan-controller.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";
import forumController from "../controller/forum-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

userRouter.get("/api/home/get", homeController.getHomeContent);

userRouter.get('/api/users/current', userController.get);
userRouter.get('/api/users/get/', userController.getOtherUsers);
userRouter.delete('/api/users/logout', userController.logout);
userRouter.put('/api/users/update', multerMiddleware, userController.updateUser);

userRouter.post('/api/laporan/create', multerMiddleware, laporanController.createLaporanSengketa);
userRouter.get('/api/map/get', laporanController.getKoordinatSengketa);
userRouter.get('/api/laporan/:no_sertifikat/get/', laporanController.getLaporanSengketa);
userRouter.delete('/api/laporan/delete/', laporanController.deleteLaporanSengketa);
userRouter.put('/api/laporan/update/', laporanController.updateLaporanSengketa);
userRouter.delete('/api/laporan/photos/delete', laporanController.deleteLaporanPhotos);
userRouter.put('/api/laporan/photos/add', multerMiddleware, laporanController.addLaporanPhotos);
userRouter.get('/api/laporan/get/user', laporanController.getLaporanSengketaByUser);

userRouter.get('/api/edukasi/:id/get', edukasiController.getPostEdukasi);
userRouter.get('/api/edukasi/get', edukasiController.getPostEdukasiAll);
userRouter.post('/api/edukasi/create', multerMiddleware, edukasiController.createPostEdukasi);
userRouter.get('/api/edukasi/get/recommended', edukasiController.getRecommendedArtikel);

userRouter.get('/api/konsultasi/ahli/get', konsultasiController.getAllAhli);
userRouter.get('/api/konsultasi/ahli/get/bidang/:bidang/', konsultasiController.getAllAhliByBidang);
userRouter.get('/api/konsultasi/ahli/get/:id', konsultasiController.getAhli);
userRouter.get('/api/konsultasi/ahli/get/:id/ulasan', konsultasiController.getUlasanAhli);
userRouter.get('/api/konsultasi/ahli/get/:id/rating', konsultasiController.getRatingAhli);
userRouter.post('/api/konsultasi/ahli/:id/ulasan', konsultasiController.createUlasanAhli);

userRouter.post('/api/forum/create', forumController.createThreadForum);
userRouter.post('/api/forum/reply/add', forumController.createReplyForum);
userRouter.get('/api/forum/:id/get', forumController.getThreadForum);
userRouter.get('/api/forum/:id/replies/get', forumController.getThreadReplies);
userRouter.get('/api/forum/get', forumController.getAllThreadForum);
userRouter.delete('/api/forum/:id/delete', forumController.deleteThreadForum);
userRouter.put('/api/forum/:id/update', forumController.updateThreadForum); 
userRouter.delete('/api/forum/reply/:id/delete', forumController.deleteReplyForum);
userRouter.put('/api/forum/reply/:id/update', forumController.updateReplyForum);
userRouter.get('/api/forum/:id/detail/get/', forumController.getThreadAndReplies);


export {
    userRouter
}