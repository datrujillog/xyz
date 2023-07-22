const express = require('express');
const morgan = require('morgan');

const app = express();

//importar rutas
const Product = require('./routes/product.Route');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//utilizar rutas
Product(app);


module.exports = app;