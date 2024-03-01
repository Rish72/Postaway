import express from "express";
import userRouter from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";
import postRouter from "./src/features/posts/post.routes.js";
import commentsRouter from "./src/features/comments/comm.routes.js";
import likeRouter from "./src/features/likes/like.routes.js";
import jwtAuth from "./src/middlewares/auth.middleware.js";

const app = express();
app.use(bodyParser.json());

const port = 3000;

//      M I D D L E W A R E S
app.use("/api/users", userRouter);
app.use("/api/posts", jwtAuth, postRouter);
app.use("/api/comments", jwtAuth,commentsRouter);
app.use("/api/likes", jwtAuth,likeRouter);

app.get("/", (req, res) => {
  res.send("Welcome to PostAway <sub>A social media backend project<sub>");
});

app.listen(port, () => {
  console.log(`Listenning at ${port}`);
});
