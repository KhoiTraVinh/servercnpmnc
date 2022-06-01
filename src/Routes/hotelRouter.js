import express from 'express';
export const HotelRouter = express.Router();
import {HotelController} from '../controllers/hotelController.js';

HotelRouter.post('/', HotelController.Create);
HotelRouter.get('/', HotelController.getAll);
HotelRouter.get('/:id', HotelController.getOne);