import express from "express";

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send("Welcome to PostAway <sub>A social media backend project<sub>");
})

app.listen(port , ()=> {
    console.log(`Listenning at ${port}`);
})