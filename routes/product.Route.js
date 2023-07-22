'use strict';

const express = require('express');

const ProductService = require('../services/product.Service');

function ProductRouter(app){
    const router = express.Router();

    const productServ = new ProductService();

    app.use('/api/v1/product', router);

    router.get('/', async (req, res) => {
        const products = await productServ.getProducts();
        res.json(products);
    });



}

module.exports = ProductRouter;