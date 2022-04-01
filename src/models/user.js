import database from 'mongoose';

const userSchema = new database.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, default: false, required: true},
},
{
    timestamps: true,
});
const User = database.model('User', userSchema);
export default User;