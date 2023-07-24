'use strict';

const express = require('express');
const SaleService = require('../services/sale.Service');

function SaleRouter(app) {
    const router = express.Router();
    const saleServ = new SaleService();


    app.use('/api/v1/sale', router);


    router.get('/best-clients', async (req, res) => {
        try {
            const results = await saleServ.getTopCustomers();
            res.json({
                message: "Best clients",
                results 
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.post('/operators/time-delivery', async (req, res) => {
        try {
            const product = req.body;
            const results = await saleServ.getDeliveryTimesByOperator(product);
            res.json({
                message: "Time delivery made successfully",
                results
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}
module.exports = SaleRouter;