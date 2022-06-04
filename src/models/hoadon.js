import database from 'mongoose';

const orderSchema = new database.Schema({
    user_id: {
        type: database.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},
{
    timestamps: true,
});
const Order = database.model('Order', orderSchema);
export default Order;