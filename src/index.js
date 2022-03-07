import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const api = express();

api.get("/", (req, res) => {
    res.send("KhoiDepTrai");
})

api.listen(process.env.PORT, () => {
    console.log(`Server run on ${process.env.PORT}`);
})