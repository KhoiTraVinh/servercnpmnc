import expressAsyncHandler from 'express-async-handler';
import OrderDetail from '../models/orders_detail';

const Create = expressAsyncHandler(async (req, res) => {
    const order_detail = new OrderDetail({
        order_id: req.body,
        product_id: req.body,
        quantity: req.body
    });
    const created = await order_detail.save();
    res.send({
        user_uid: created.user_uid
    })
});

const getAll = expressAsyncHandler(async (req, res) => {
    const order_details = await OrderDetail.find({});
    res.send(order_details)
});

const getOne = expressAsyncHandler(async (req, res) => {
    const {orderId} = req.params;
    const order_detail = await OrderDetail.findById(orderId);
    if (order_detail) {
        res.send(order_detail);
    } else {
        res.status(404).send({ message: 'Khong tin thay san pham' });
    }
});



export const OrderDetailController = {
    Create,
    getAll,
    getOne
}