import express from "express";
import CommentsController from "./comm.controller.js";
const commentsRouter = express.Router();

const commentsController = new CommentsController();

commentsRouter.get("/:id", commentsController.getAllComments);
commentsRouter.post("/addComment", commentsController.addComment);
commentsRouter.put("/update", commentsController.updateComment);
commentsRouter.delete("/delete", commentsController.deleteComment);

export default commentsRouter;
