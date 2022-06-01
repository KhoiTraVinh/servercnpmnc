import database from 'mongoose';

const userSchema = new database.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    fname: {type: String, required: true, default:'not set'},
    lname: {type: String, required: true, default:'not set'},
    age: {type: Number, default: 18},
    role: {type: Number, default: 555},
    photoUrl: {type: String},
    type: {type: String, default: 'local'}
},
{
    timestamps: true,
});
const User = database.model('User', userSchema);
export default User;