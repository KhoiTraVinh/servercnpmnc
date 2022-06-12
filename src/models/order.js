import database from 'mongoose';

const PromotionSchema = new database.Schema({
    price: {type: Number, required: true},
    pricediscount: {type: Number, required: true},
    infocustomer: {type: Array, required: true},
    flightId: {
        type: database.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    },
    hotelId: {
        type: database.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: true,
    },
    isPay: {type: Boolean, required: true, default: false},
},
{
    timestamps: true,
});
const Promotion = database.model('Promotion', PromotionSchema);
export default Promotion;