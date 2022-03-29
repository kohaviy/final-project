const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./db");

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
const customerRoute = require('./routes/customerRoute');
const productsRoute = require('./routes/productsRoute');
const productCategoryRoute = require('./routes/productCategoryRoute');



const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', customerRoute);
app.use('/products', productsRoute);
app.use('/products', productCategoryRoute);

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;