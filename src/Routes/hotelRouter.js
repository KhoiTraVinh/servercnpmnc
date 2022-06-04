import express from 'express';
export const HotelRouter = express.Router();
import {HotelController} from '../controllers/hotelController.js';
import { OrderController } from '../controllers/orderController.js';

HotelRouter.post('/', HotelController.Create);
HotelRouter.post('/order/', OrderController.Create);
HotelRouter.get('/', HotelController.getAll);
HotelRouter.get('/order/', OrderController.getAll);
HotelRouter.get('/:id', HotelController.getOne);
HotelRouter.get('/order/one', OrderController.getOne);