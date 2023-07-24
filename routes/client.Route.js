'use strict';

const express = require('express');
const ClientService = require('../services/client.Service');

function ClientRouter(app) {
    const router = express.Router();
    const clientServ = new ClientService();


    app.use('/api/v1/client', router);

    router.post('/create', async (req, res) => {
        try {
            const client = req.body;
            const results = await clientServ.createClient(client);
            res.json({
                message: "Client created successfully",
                results
            });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
}

module.exports = ClientRouter;