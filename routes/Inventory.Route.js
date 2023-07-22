'use strict';

const express = require('express');

const InventoryService = require('../services/inventory.Service');

function InventoryRouter(app) {
    const router = express.Router();

    const InventoryServ = new InventoryService();

    app.use('/api/v1/inventory', router);

    // GET /inventario: Obtener el inventario completo de productos en stock.
    router.get('/', async (req, res) => {
        try {
            const products = await InventoryServ.getProductsInventory();
            res.json(products);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    router.post('/create', async (req, res) => {
        try {
            const product = req.body;
            const createdProduct = await InventoryServ.createProductInventory(product);
            res.json(createdProduct);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    })
}

module.exports = InventoryRouter;