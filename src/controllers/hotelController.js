import Hotel from '../models/hotel.js';
import expressAsyncHandler from 'express-async-handler';

const Create = expressAsyncHandler(async (req, res) => {
    const hotel = new Hotel({
        Name: req.body.Name,
        Address: req.body.Address,
        Price: req.body.Price,
        Percent: req.body.Percent,
        PriceDiscount: req.body.PriceDiscount,
        Describe: req.body.Describe,
        Room: req.body.Room
    });
    const created = await hotel.save();
    res.send({
        id: created.id,
        Name: created.Name,
        Address: created.Address,
        Price: created.Price,
        Percent: created.Percent,
        PriceDiscount: created.PriceDiscount,
        Flight: created.Flight,
        Describe: created.Describe,
        Room: created.Room,
    })
});

const getAll = expressAsyncHandler(async (req, res) => {
    const text = req.query.Address;
    const hotels = await Hotel.find({Address: { $regex: '.*' + text + '.*' } });
    res.send(hotels)
});


const get = expressAsyncHandler(async (req, res) => {
    const hotels = await Hotel.find({});
    res.send(hotels)
});

const getOne = expressAsyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id);
    if(hotel){
        res.send(hotel);
    }else{
        res.status(404).send({message: 'Khong tin thay san pham'});
    }
});

const changeReserved = expressAsyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.body.idHotel);
    if(hotel){
        hotel.Room.map((room) => {
            if(room.id == req.body.idRoom){
                room.Reserved = true;
            }
        })
        const updateHotel = await hotel.save();
        res.send({ message: 'hotel updated', hotel: updateHotel });
    }else{
        res.status(404).send({message: 'Room not found'});
    }
});



export const HotelController = {
    Create,
    getAll,
    getOne,
    changeReserved,
    get,
}