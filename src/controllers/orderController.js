import expressAsyncHandler from 'express-async-handler';
import Order from '../models/hoadon.js';

const Create = expressAsyncHandler(async (req, res) => {
    const order = new Order({
        user_id: req.body.user_id
    });
    const created = await order.save();
    res.send({
        user_uid: created.user_id
    })
});

const getAll = expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({});
    res.send(orders)
});

const getOne = expressAsyncHandler(async (req, res) => {
    const {orderId} = req.params.id;
    const order = await Order.findById(orderId);
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Khong tin thay san pham' });
    }
});



export const OrderController = {
    Create,
    getAll,
    getOne
}