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

    router.post('/create', async (req, res) => {
        try {
            const product = req.body;
            const createdProduct = await productServ.createProduct(product);
            res.json(createdProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.put('/update/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const product = req.body;
            const updatedProduct = await productServ.updateProduct(id, product);
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.delete('/delete/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const deletedProduct = await productServ.deleteProduct(id);
            res.json(deletedProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.post('/sell/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const product = req.body;
            const results = await productServ.sellProduct(id, product);
            res.json({
                message: "Sale made successfully",
                results
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });


    router.get('/scores', async (req, res) => {
        try {
            const results = await productServ.getProductScores();
            res.json(results);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.get('/stats', async (req, res) => {
        try {
            const results = await productServ.getProductStatistics();
            res.json(results);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

}

module.exports = ProductRouter;