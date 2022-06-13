import Promotion from '../models/order.js';
import expressAsyncHandler from 'express-async-handler';
import { sendMailContact } from '../config/sendmail.js'




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


const post = expressAsyncHandler(async (req, res) => {
  try {
    const subject = `Cám ơn bạn đã mua combo tiết kiệm gồm: vé máy bay giá rẻ và khách sạn bên chúng tôi`
    const html2 = `
    <p>WE GOT IT!<p></br>
    <p>Hello ${req.body.name},<p>
    <p>Thank you so much for reaching out! This auto-reply is just to let you know...</p></br>
    <p>We received your email and will get back to you as soon as possible.</p></br>
    <p>If you have any additional information that you think will help us to assist you, please feel free to reply to this email.</p>
    <p>We look forward to chatting soon!</p></br>
    <p>Best regards,</p>
    <p>ComBoTietKiem</p>
    `
    await sendMailContact(subject, req.body.email, html2);
    return res.status(200).json({
      msg: 'success',
    });
  } catch (error) {
    return res.status(500).send({
      msg: error.message,
    });
  }
});



export const PromotionController = {
    creatPromo,
    post,
}