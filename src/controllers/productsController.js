import Products from '../models/product.js';
import expressAsyncHandler from 'express-async-handler';
import Cate from '../models/cate.js';

const getProducts = expressAsyncHandler(async (req, res) => {
    const products = await Products.find({});
    if (products) {
        res.send(products)
    } else {
        res.status(404).send({ message: 'No Products' });
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

const getProduct = expressAsyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Not Found' });
    }
});

const createCate = expressAsyncHandler(async (req, res) => {
    const cate = await Cate.create({
        title: "Shirt"
    })
    cate.save();
    res.send(cate);
})


const createAllProduct = expressAsyncHandler(async (req, res) => {
    const product = await Products.create({
        title: req.body,
        description: req.body,
        price:req.body,
        image: req.body,
        cat_id: req.body,
        short_desc: req.body,
        quantity: req.body,
        images: req.body
    })
    product.save();
    res.send(product);
})

export const ProductsController = {
    getProducts,
    creatProducts,
    getProduct,
    createCate,
}