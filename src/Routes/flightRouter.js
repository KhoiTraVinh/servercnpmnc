import express from 'express';
export const FlightRouter = express.Router();
import {FlightController} from '../controllers/flightController.js';

FlightRouter.post('/', FlightController.Create);