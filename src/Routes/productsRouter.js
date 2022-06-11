import express from 'express';
export const ProductsRouter = express.Router();
import {ProductsController} from '../controllers/productsController.js';

ProductsRouter.get('/', ProductsController.getProducts);
ProductsRouter.post('/', ProductsController.creatProducts);
ProductsRouter.post('/createCate', ProductsController.createCate);