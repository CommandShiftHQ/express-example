const express = require('express');
const CarsRouter = require('./Cars/router');

const app = express();

app.use('/cars', CarsRouter);

app.listen(3000);