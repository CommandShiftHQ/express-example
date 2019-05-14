const express = require('express');
const carsRouter = express.Router();

carsRouter.get('/', () => {
    console.log('hello, getting you a car');
});

carsRouter.get('/teapot', (request, response) => {
    response.status(418).send('Hi, I am a teapot');
});

carsRouter.get('/:model/:colour/:transmission', (request, response) => {
    response.send([{
        id: 1,
        colour: request.params.colour,
        model: request.params.model,
        transmission: request.params.transmission
    }]);
});

module.exports = carsRouter;