'use strict';

const express = require('express');

const ProductService = require('../services/product.Service');

function ProductRouter(app) {
    const router = express.Router();

    const productServ = new ProductService();

    app.use('/api/v1/product', router);

    router.get('/', async (req, res) => {
        const products = await productServ.getProducts();
        res.json(products);
    });

    router.post('/', async (req, res) => {
        try {
            const product = req.body;
            const createdProduct = await productServ.createProduct(product);
            res.json(createdProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.put('/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const product = req.body;
            const updatedProduct = await productServ.updateProduct(id, product);
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.delete('/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const deletedProduct = await productServ.deleteProduct(id);
            res.json(deletedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });



}

module.exports = ProductRouter;