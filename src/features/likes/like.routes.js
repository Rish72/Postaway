import express from "express";
import LikesController from "./like.controller.js";

const likeRouter =  express.Router();
const likesController = new LikesController();

likeRouter.get('/', likesController.getAllLikeForPost);
likeRouter.get('/', likesController.getToggle);

export default likeRouter