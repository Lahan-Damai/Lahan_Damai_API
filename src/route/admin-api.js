import express from "express";
import {authAdminMiddleware} from "../middleware/admin-auth-middleware.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";
import userController from "../controller/user-controller.js";
import laporanController from "../controller/laporan-controller.js";
import { multerMiddleware } from "../middleware/multer-middleware.js";
import chatbotController from "../controller/chatbot-controller.js";

const adminRouter = new express.Router();
adminRouter.use(authAdminMiddleware);

adminRouter.post('/api/edukasi/create', multerMiddleware, edukasiController.createPostEdukasi);
adminRouter.put('/api/edukasi/update/:id', edukasiController.updatePostEdukasi);
adminRouter.delete('/api/edukasi/delete/:id', edukasiController.deletePostEdukasi);
adminRouter.delete('/api/edukasi/photos/delete/:id', edukasiController.deleteArtikelPhotos);
adminRouter.put('/api/edukasi/photos/add/:id', multerMiddleware, edukasiController.addArtikelPhotos);

adminRouter.post('/api/konsultasi/ahli/create', multerMiddleware, konsultasiController.createAhli);
adminRouter.put('/api/konsultasi/ahli/update/:id', multerMiddleware, konsultasiController.updateAhli);
adminRouter.delete('/api/konsultasi/ahli/delete/:id', konsultasiController.removeAhli);

adminRouter.get('/api/users/get/all', userController.getAllUsers);
adminRouter.put('/api/users/update/role', userController.changeUserRole);
adminRouter.get('/api/users/:nik/get/', userController.getOtherUsers);

adminRouter.get('/api/laporan/get/all', laporanController.getAllLaporanSengketa);

adminRouter.delete('/api/chatbot/delete-collection', chatbotController.deleteCollection);
adminRouter.post('/api/chatbot/create-collection', chatbotController.createCollection);
adminRouter.post('/api/chatbot/insert-document', chatbotController.insertFileToChromaDb);
adminRouter.post('/api/chatbot/context/add', multerMiddleware, chatbotController.postFileToGoogleCloudStorage);
adminRouter.post('/api/chatbot/context/add-to-vdb/all', multerMiddleware, chatbotController.insertAllContextFileToVectorDatabase);
adminRouter.delete('/api/chatbot/context/delete/all', chatbotController.deleteAllContextFile);
adminRouter.delete('/api/chatbot/reset-collection', chatbotController.resetCollection);

export {
    adminRouter
}