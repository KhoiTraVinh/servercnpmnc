import database from 'mongoose';

const productsSchema = new database.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
},
{
    timestamps: true,
});
const Products = database.model('Products', productsSchema);
export default Products;