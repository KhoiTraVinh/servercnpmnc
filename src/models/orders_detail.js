import database from 'mongoose';

const orderSchema = new database.Schema({
    order_id: {
        type: database.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    product_id: {
        type: database.Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    }
},
{
    timestamps: true,
});
const OrderDetail = database.model('orders_details', orderSchema);
export default OrderDetail;