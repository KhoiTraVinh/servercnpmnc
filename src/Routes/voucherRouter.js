import express from 'express';
export const VoucherRouter = express.Router();
import {UserController} from '../controllers/voucherController.js';

VoucherRouter.get('/get/plane', UserController.getPlaneVoucher);
VoucherRouter.get('/get/hotel', UserController.getHotelVoucher);
VoucherRouter.get('/get/transaction', UserController.getTransactionValue);
VoucherRouter.post('/create', UserController.createVoucher);
VoucherRouter.put('/update/credit', UserController.updateCredit);
VoucherRouter.put('/update/used', UserController.updateUsed);