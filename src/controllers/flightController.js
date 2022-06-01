import Flight from '../models/flight.js';
import expressAsyncHandler from 'express-async-handler';

const Create = expressAsyncHandler(async (req, res) => {
    const flight = new Flight({
        To: req.body.to,
        From: req.body.from,
        Airlines: "Việt Nam Airline",
        Time: Date.now(),
        Start: Date.now(),
        End: Date.now(),
        Date: req.body.value,
    });
    const created = await flight.save();
    res.send({
        id: created.id,
        To: created.To,
        From: created.From,
        Airlines: created.Airlines,
        Time: created.Time,
        Start: created.Start,
        End: created.End,
        Date: created.Date,
        Type: created.Type,
        Landing: created.Landing,
    })
});


const getAll  = expressAsyncHandler(async (req, res) => {
    try{
        const data = await Flight.find({});
        res.send(data);
    }catch(e){
        return e;
    }
});

export const FlightController = {
    Create,
    getAll,
}