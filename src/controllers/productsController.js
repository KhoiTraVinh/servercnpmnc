import Products from '../models/product.js';
import expressAsyncHandler from 'express-async-handler';

const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Products.find({});
    if(voucher){
        res.send(products)
    }else{
        res.status(404).send({message: 'No Products'});
    }
});

export const ProductsController = {
    getProducts,
}