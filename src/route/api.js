import express from "express";
import userController from "../controller/user-controller.js";
import homeController from "../controller/home-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import { multerMiddleware } from "../middleware/multer-middleware.js";
import laporanController from "../controller/laporan-controller.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";
import forumController from "../controller/forum-controller.js";
import chatbotController from "../controller/chatbot-controller.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

userRouter.get("/api/home/get", homeController.getHomeContent);

userRouter.get('/api/users/current', userController.get);
userRouter.delete('/api/users/logout', userController.logout);
userRouter.put('/api/users/update', multerMiddleware, userController.updateUser);

userRouter.get('/api/map/get', laporanController.getKoordinatSengketa);
userRouter.get('/api/laporan/:user_nik/:no_sertifikat/get/', laporanController.getLaporanSengketa);
userRouter.get('/api/laporan/:no_sertifikat/get/', laporanController.getLaporanSengketa);
userRouter.get('/api/laporan/get/by/vote', laporanController.getAllLaporanSortByVoteCount);
userRouter.get('/api/laporan/get/user', laporanController.getLaporanSengketaByUser);
userRouter.get('/api/laporan/:user_nik/:no_sertifikat/comment/getall', laporanController.getCommentLaporanSengketa);
userRouter.delete('/api/laporan/delete/', laporanController.deleteLaporanSengketa);
userRouter.delete('/api/laporan/photos/delete', laporanController.deleteLaporanPhotos);
userRouter.delete('/api/laporan/unvote', laporanController.unvoteLaporanSengketa);
userRouter.delete('/api/laporan/comment/delete', laporanController.deleteCommentLaporanSengketa);
userRouter.put('/api/laporan/update/', laporanController.updateLaporanSengketa);
userRouter.put('/api/laporan/photos/add', multerMiddleware, laporanController.addLaporanPhotos);
userRouter.post('/api/laporan/create', multerMiddleware, laporanController.createLaporanSengketa);
userRouter.post('/api/laporan/vote', laporanController.voteLaporanSengketa);
userRouter.post('/api/laporan/comment/add', laporanController.addCommentLaporanSengketa);

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
userRouter.get('/api/konsultasi/ahli/get/:id/detail', konsultasiController.getDetailAhli);
userRouter.delete('/api/konsultasi/ahli/:id/ulasan', konsultasiController.deleteUlasanAhli);
userRouter.post('/api/konsultasi/ahli/:id/favorite', konsultasiController.addFavorite);
userRouter.delete('/api/konsultasi/ahli/:id/favorite', konsultasiController.removeFavorite);
userRouter.get('/api/konsultasi/ahli/favorite/get', konsultasiController.getUserFavorite);

userRouter.get('/api/forum/get/all', forumController.getAllThreadForum);
userRouter.post('/api/forum/create', forumController.createThreadForum);
userRouter.delete('/api/forum/:id/delete', forumController.deleteThreadForum);
userRouter.put('/api/forum/:id/update', forumController.updateThreadForum); 
userRouter.get('/api/forum/:id/detail/get/', forumController.getThreadAndReplies);
userRouter.post('/api/forum/reply/add', forumController.createReplyForum);
userRouter.delete('/api/forum/reply/:id/delete', forumController.deleteReplyForum);
userRouter.get('/api/forum/:id/get', forumController.getThreadForum);
userRouter.get('/api/forum/:id/replies/get', forumController.getThreadReplies);
userRouter.put('/api/forum/reply/:id/update', forumController.updateReplyForum);

userRouter.post('/api/chatbot/generate', chatbotController.generateAnswer);


export {
    userRouter
}