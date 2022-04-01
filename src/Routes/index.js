import express from 'express';
export const Routes = express();
import {UserRouter} from './userRouter.js';


Routes.use('/user', UserRouter);