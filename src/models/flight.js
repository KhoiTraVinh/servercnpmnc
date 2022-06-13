import database from 'mongoose';

const flightSchema = new database.Schema({
    To: {type: String, required: true},
    From: {type: String, required: true},
    Airlines: {type: String, required: true},
    Time: {type: Date, required: true},
    Start: {type: Date, required: true},
    End: {type: Date, required: true},
    Date: {type: Date, required: true},
    Type: {type: Boolean, default: false, required: true},
    Landing: {type: Boolean,  default: false, required: true},
    seatclass: {type: String, required: true},
    peonum: {type: Number, required: true},
},
{
    timestamps: true,
});
const Flight = database.model('Flight', flightSchema);
export default Flight;