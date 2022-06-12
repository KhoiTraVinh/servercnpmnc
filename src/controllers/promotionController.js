import Promotion from '../models/order.js';
import expressAsyncHandler from 'express-async-handler';




const creatPromo = expressAsyncHandler(async (req, res) => {
    const promo = new Promotion({
        price: req.body.price,
        pricediscount: req.body.pricediscount,
        infocustomer: req.body.infocustomer,
        flightId: req.body.flightId,
        hotelId: req.body.hotelId,
    });
    const created = await promo.save();
    res.send({
        price: created.price,
        pricediscount: created.pricediscount,
        infocustomer: created.infocustomer,
        flightId: created.flightId,
        hotelId: created.hotelId,
    })
});


export const PromotionController = {
    creatPromo,
}