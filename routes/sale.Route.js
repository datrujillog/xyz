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
}
module.exports = SaleRouter;