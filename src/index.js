import express from 'express';

const api = express();

api.listen(5000, () => {
    console.log("Server run on 5000");
})