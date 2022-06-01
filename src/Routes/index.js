import express from 'express';
export const Routes = express();
import {UserRouter} from './userRouter.js';
import {VoucherRouter} from './voucherRouter.js';
import {ProductsRouter} from './productsRouter.js';
import {FlightRouter} from './flightRouter.js';
import {HotelRouter} from './hotelRouter.js';

Routes.use('/auth', UserRouter);
Routes.use('/voucher', VoucherRouter);
Routes.use('/products', ProductsRouter);
Routes.use('/flight', FlightRouter);
Routes.use('/hotel', HotelRouter);