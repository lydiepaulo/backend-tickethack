require('dotenv').config();

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bookingsRouter = require('./routes/bookings');
var cartsRouter = require('./routes/carts');
var searchsRouter = require('./routes/searchs');

var app = express();
const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bookings', bookingsRouter);
app.use('/carts', cartsRouter);
app.use('/searchs', searchsRouter);

module.exports = app;
