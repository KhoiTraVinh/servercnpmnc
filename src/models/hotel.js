import database from 'mongoose';

const hotelSchema = new database.Schema({
    Name: {type: String, required: true},
    Address: {type: String, required: true},
    Price: {type: Number, required: true},
    Percent: {type: Number, required: true},
    PriceDiscount: {type: Number, required: true},
    flightID: {
        type: database.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    },
},
{
    timestamps: true,
});
const Hotel = database.model('Hotel', hotelSchema);
export default Hotel;