import Products from '../models/product.js';
import expressAsyncHandler from 'express-async-handler';

const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Products.find({});
    if(products){
        res.send(products)
    }else{
        res.status(404).send({message: 'No Products'});
    }
});

const creatProducts = expressAsyncHandler(async (req, res) => {
    const product = new Products({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
    });
    const created = await product.save();
    res.send({
        title: created.title,
        description: created.description,
        price: created.price,
        category: created.category,
        image: created.image,
    })
});

export const ProductsController = {
    getProducts,
    creatProducts,
}