import database from 'mongoose';

const voucherSchema = new database.Schema({
    code: {type: String, required: true, unique: true},
    appID: {type: Number, required: true},
    partnerID: {type: Number, required: true},
    percent: {type: Number, required: true},
    price: {type: Number, required: true},
    used: {type: Boolean, default: false, required: true},
    credit: {type: Boolean, default: false, required: true},
    userID: {
        type: database.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
},
{
    timestamps: true,
});
const Voucher = database.model('Voucher', voucherSchema);
export default Voucher;