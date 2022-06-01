import database from 'mongoose';

const productsSchema = new database.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    cat_id: {
        type: database.Schema.Types.ObjectId,
        ref: 'Cate',
        required: true,
    },
    short_desc: {type: String, required: true},
    quantity: {type: Number, required: true},
    images: {type: String}
},
{
    timestamps: true,
});
const Products = database.model('Products', productsSchema);
export default Products;