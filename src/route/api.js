import express from "express";
import userController from "../controller/user-controller.js";
import laporanController from "../controller/laporan-controller.js";
import {authMiddleware} from "../middleware/auth-middleware.js";
import { multerMiddleware } from "../middleware/multer-middleware.js";

const userRouter = new express.Router();
userRouter.use(authMiddleware);

userRouter.get('/api/users/current', userController.get);
userRouter.delete('/api/users/logout', userController.logout);
userRouter.post('/api/laporan/create', multerMiddleware, laporanController.createLaporanSengketa);

export {
    userRouter
}