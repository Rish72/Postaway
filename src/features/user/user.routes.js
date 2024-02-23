import express from "express";
import UserController from "./user.controller.js";

const userController = new UserController();
const userRouter = express.Router();


userRouter.get('/', userController.getAll);
userRouter.post('/signin', userController.signin);
userRouter.post('/signup', userController.signup);

export default userRouter;