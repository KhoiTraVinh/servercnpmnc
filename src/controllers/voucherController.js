import Voucher from '../models/voucher.js';
import expressAsyncHandler from 'express-async-handler';

const getPlaneVoucher = expressAsyncHandler(async (req, res) => {
    const vouchers = await Voucher.find({});
    const voucher= vouchers.filter(x=>
        x.partnerID == 1 && x.used == false
    )
    console.log(voucher)
    if(voucher){
        res.send(voucher)
    }else{
        res.status(404).send({message: 'No voucher yet'});
    }
});

const getHotelVoucher = expressAsyncHandler(async (req, res) => {
    const vouchers = await Voucher.find({});
    const voucher= vouchers.filter(x=>
        x.partnerID == 2 && x.used == false
    )
    console.log(voucher)
    if(voucher){
        res.send(voucher)
    }else{
        res.status(404).send({message: 'No voucher yet'});
    }
});

const getTransactionValue = expressAsyncHandler(async (req, res) => {
    const vouchers = await Voucher.find({});
    const voucher= vouchers.filter(x=>
        x.credit == false 
    )
    console.log(voucher)
    if(voucher){
        res.send(voucher)
    }else{
        res.status(404).send({message: 'No transaction yet'});
    }
});


const createVoucher = expressAsyncHandler(async (req, res) => {
    const voucher = new Voucher({
        code: req.body.code,
        appID: req.body.appID,
        partnerID: req.body.partnerID,
        percent: req.body.percent,
        price: req.body.price,
        userID: req.body.userID
    });
    const createdVoucher = await voucher.save();
    res.send({
        code: createdVoucher.code,
        appName: createdVoucher.appID,
        partnerName: createdVoucher.partnerID,
        percent: createdVoucher.percent,
    })
});


const updateCredit = expressAsyncHandler(async (req, res) => {
    const voucherID = req.body.id;
    const voucher = await Voucher.findById(voucherID);
    if (voucher) {
        voucher.credit = true;
        const updateVoucher = await voucher.save();
        res.send({ message: 'voucher updated', voucher: updateVoucher });
    } else {
        res.status(404).send({ message: 'voucher not found' });
    }
});

const updateUsed = expressAsyncHandler(async (req, res) => {
    const voucherID = req.body.id;
    const voucher = await Voucher.findById(voucherID);
    if (voucher) {
        voucher.used = true;
        const updateVoucher = await voucher.save();
        res.send({ message: 'voucher updated', voucher: updateVoucher });
    } else {
        res.status(404).send({ message: 'voucher not found' });
    }
});

export const UserController = {
    getPlaneVoucher,
    getHotelVoucher,
    getTransactionValue,
    createVoucher,
    updateCredit,
    updateUsed,
}