import express from "express";
import {authAdminMiddleware} from "../middleware/admin-auth-middleware.js";
import edukasiController from "../controller/edukasi-controller.js";
import konsultasiController from "../controller/konsultasi-controller.js";
import userController from "../controller/user-controller.js";

const adminRouter = new express.Router();
adminRouter.use(authAdminMiddleware);

adminRouter.post('/api/edukasi/create', edukasiController.createPostEdukasi);
adminRouter.put('/api/edukasi/update/:id', edukasiController.updatePostEdukasi);
adminRouter.delete('/api/edukasi/delete/:id', edukasiController.deletePostEdukasi);
adminRouter.post('/api/konsultasi/ahli/create', konsultasiController.createAhli);
adminRouter.put('/api/konsultasi/ahli/update/:id', konsultasiController.updateAhli);
adminRouter.delete('/api/konsultasi/ahli/delete/:id', konsultasiController.removeAhli);

adminRouter.get('/api/users/get/all', userController.getAllUsers);


export {
    adminRouter
}