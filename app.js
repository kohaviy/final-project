const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./db"); //load the db connection 

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');
const customerRoute = require('./routes/customerRoute');
const productsRoute = require('./routes/productsRoute');
const productCategoryRoute = require('./routes/productCategoryRoute');
const trainingTypeRoute = require('./routes/trainingTypeRoute');
//const trainingOrderRoute = require('./routes/');




const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', customerRoute);
app.use('/products', productsRoute);
app.use('/products', productCategoryRoute);
app.use('/training', trainingTypeRoute);
//app.use('/training', trainingTypeRoute);



//app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;