import express from "express";
import {authAdminMiddleware} from "../middleware/admin-auth-middleware.js";
import edukasiController from "../controller/edukasi-controller.js";

const adminRouter = new express.Router();
adminRouter.use(authAdminMiddleware);

adminRouter.post('/api/edukasi/create', edukasiController.createPostEdukasi);
adminRouter.post('/api/edukasi/update/:id', edukasiController.updatePostEdukasi);
adminRouter.delete('/api/edukasi/delete/:id', edukasiController.deletePostEdukasi);

export {
    adminRouter
}