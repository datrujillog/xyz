const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const app = express();

//importar rutas
const Product = require('./routes/product.Route');
const Inventory = require('./routes/Inventory.Route');

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//utilizar rutas
Product(app);
Inventory(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('./libs/swagger/swagger.json')));



module.exports = app;