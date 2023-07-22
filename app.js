const express = require('express');

const app = express();

//importar rutas
const Product = require('./routes/product.Route');

//utilizar rutas
Product(app);


module.exports = app;