import database from 'mongoose';

const cateSchema = new database.Schema({
    title: {type: String, required: true}
},
{
    timestamps: true,
});
const Cate = database.model('Cate', cateSchema);
export default Cate;