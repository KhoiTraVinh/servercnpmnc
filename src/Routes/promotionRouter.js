import express from 'express';
export const PromotionRouter = express.Router();
import {PromotionController} from '../controllers/promotionController.js';

PromotionRouter.post('/', PromotionController.creatPromo);