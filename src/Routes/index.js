import express from 'express';
export const Routes = express();
import {UserRouter} from './UserRouter.js';


Routes.use('/user', UserRouter);