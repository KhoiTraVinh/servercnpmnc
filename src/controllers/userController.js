import User from '../models/user.js';
import expressAsyncHandler from 'express-async-handler';
import {Token} from '../middleware/JWT.js';
import bcrypt from 'bcryptjs';

const Login = expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: Token(user),
                message: "Login Success"
            });
            return;
        }
    }
    res.status(401).send({ message: 'Wrong Username or Password'});
});

const Register = expressAsyncHandler(async (req, res) => {
    const user = new User({
        username : req.body.fullName,
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password, 8)
    });
    const createdUsers = await user.save();
    res.send({
        _id: createdUsers._id,
        name: createdUsers.name,
        email: createdUsers.email,
        isAdmin: createdUsers.isAdmin,
        token: Token(createdUsers),
    })
});

export const UserController = {
    Login,
    Register,
}