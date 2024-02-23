import express from "express";
import userRouter from "./src/features/user/user.routes.js";
import bodyParser from "body-parser";



const app = express();
app.use(bodyParser.json())

const port = 3000;

//      M I D D L E W A R E S
app.use("/api/users", userRouter)
app.get('/', (req, res) => {
    res.send("Welcome to PostAway <sub>A social media backend project<sub>");
})

app.listen(port , ()=> {
    console.log(`Listenning at ${port}`);
})