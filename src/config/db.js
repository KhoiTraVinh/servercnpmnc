import mongoose from 'mongoose';

export const DataBase = mongoose.connect(process.env.MONGODB_URL ||'mongodb+srv://khoi:123@cluster0.plx6j.mongodb.net/ComboKhuyenMai?retryWrites=true&w=majority' ,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
});