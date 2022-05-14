import Hotel from '../models/hotel.js';
import expressAsyncHandler from 'express-async-handler';

const getPlaneVoucher = expressAsyncHandler(async (req, res) => {
});

const getHotelVoucher = expressAsyncHandler(async (req, res) => {
   
});

const getTransactionValue = expressAsyncHandler(async (req, res) => {
    
});


const createVoucher = expressAsyncHandler(async (req, res) => {
   
});


const updateCredit = expressAsyncHandler(async (req, res) => {
    
});

const updateUsed = expressAsyncHandler(async (req, res) => {
    
});

export const UserController = {
    getPlaneVoucher,
    getHotelVoucher,
    getTransactionValue,
    createVoucher,
    updateCredit,
    updateUsed,
}