import express from 'express';
export const UserRouter = express.Router();
import {UserController} from '../controllers/userController.js';

UserRouter.post('/login', UserController.Login);
UserRouter.post('/register', UserController.Register);