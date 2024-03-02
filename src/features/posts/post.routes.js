import upload from "../../middlewares/fileUpload.middleware.js";
import PostController from "./post.controller.js";
import express from "express";

const postController = new PostController();
const postRouter = express.Router();

postRouter.get('/', postController.getAll)
postRouter.get('/:id', postController.getOne)

postRouter.post("/addPost", upload.single('imageUrl'),postController.addPost);
postRouter.delete("/delete/:id", postController.deletePost);
postRouter.put("/updat/:id", postController.updatePost);

export default postRouter