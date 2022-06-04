import database from 'mongoose';

const orderSchema = new database.Schema({
    price: {type: Number, required: true},
    pricediscount: {type: Number, required: true},
    infocustomer: {type: Array, required: true},
    flightID: {
        type: database.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    },
    flightID: {
        type: database.Schema.Types.ObjectId,
        ref: 'Flight',
        required: true,
    },
},
{
    timestamps: true,
});
const Order = database.model('KhuyenMai', orderSchema);
export default Order;