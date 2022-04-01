import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataBase } from './config/db.js';
import { Routes } from './routes/index.js';


const api = express();
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());
api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cors());
DataBase

api.use('/api', Routes);

api.listen(process.env.PORT, () => {
    console.log(`Server run on ${process.env.PORT}`);
})