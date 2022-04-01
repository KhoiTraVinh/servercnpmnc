import express from 'express';
export const Routes = express();
import {UserRouter} from './userRouter.js';
import {VoucherRouter} from './voucherRouter.js';

Routes.use('/user', UserRouter);
Routes.use('/voucher', VoucherRouter);