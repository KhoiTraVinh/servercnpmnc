import database from 'mongoose';

const hotelSchema = new database.Schema({
    Name: {type: String, required: true},
    Address: {type: String, required: true},
    Price: {type: Number, required: true},
    Percent: {type: Number, required: true},
    PriceDiscount: {type: Number, required: true},
    Flight: {type: Boolean, default: true, required: true},
    Describe: {type: String, required: true},
    Room: [
        {
            Name: {type:String, required: true},
            PeoNum: {type:String, required: true},
            Bed: {type:String, required: true},
            Refund: {type:String, required: true},
            Wifi: {type:String, required: true},
            EmptyRoom: {type: Number, required: true},
            Price: {type: Number, required: true}
        },
    ],
},
{
    timestamps: true,
});
const Hotel = database.model('Hotel', hotelSchema);
export default Hotel;