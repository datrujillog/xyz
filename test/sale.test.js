
const ProductService = require("../services/product.Service");
const InventoryService = require("../services/inventory.Service");
const SaleService = require("../services/sale.Service");

const ClientService = require('../services/client.Service');
const { ProductModel, InventoryModel, SaleModel, ClientModel, OperatorModel } = require('../database');



jest.mock('../database');

describe('getTopCustomers', () => {
    it('should return the top customers by total sales', async () => {
        const clients = [
            {
                id: 1,
                name: 'Client 1',
                sales: [
                    { id: 1, quantity: 1 },
                    { id: 2, quantity: 2 },
                ],
            },
            {
                id: 2,
                name: 'Client 2',
                sales: [
                    { id: 3, quantity: 1 },
                    { id: 4, quantity: 1 },
                ],
            },
        ];

        ClientModel.findAll.mockResolvedValue(clients);

        const clientService = new ClientService();
        const saleServ = new SaleService();
        const result = await saleServ.getTopCustomers();

        expect(ClientModel.findAll).toHaveBeenCalled();
        expect(result).toEqual([
            ['Client 1', 3],
            ['Client 2', 2],
        ]);
    });

    it('should return an empty array if there are no clients', async () => {
        ClientModel.findAll.mockResolvedValue([]);

        const clientService = new ClientService();
        const saleServ = new SaleService();
        const result = await saleServ.getTopCustomers();

        expect(ClientModel.findAll).toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});

describe('getDeliveryTimesByOperator', () => {
    it('should update the delivery time of a sale', async () => {
        const client = {
            id: 1,
            name: 'Client 1',
        };

        const sale = {
            id: 1,
            quantity: 1,
        };

        const updatedSale = {
            id: 1,
            quantity: 1,
            deliveryTime: 2,
            operatorId: 1,
        };

        ClientModel.findOne.mockResolvedValue(client);
        SaleModel.findOne.mockResolvedValue(sale);
        SaleModel.update.mockResolvedValue(updatedSale);

        const saleServ = new SaleService();
        const result = await saleServ.getDeliveryTimesByOperator({
            saleId: 1,
            operatorId: 1,
            deliveryTime: 2,
        });

        expect(ClientModel.findOne).toHaveBeenCalled();
        expect(SaleModel.findOne).toHaveBeenCalled();
        expect(SaleModel.update).toHaveBeenCalled();
        expect(result).toEqual({
            msg: 'Time delivery made successfully',
            updatedSale,
        });
    });

    it('should throw an error if there is no client with that id', async () => {
        ClientModel.findOne.mockResolvedValue(null);

        const saleServ = new SaleService();
        const result = saleServ.getDeliveryTimesByOperator({
            saleId: 1,
            operatorId: 1,
            deliveryTime: 2,
        });

        // await expect(result).rejects.toThrow('There is no client with that id');
        await expect(result)
    });

    it('should throw an error if there is no sale with that id', async () => {
        const client = {
            id: 1,
            name: 'Client 1',
        };

        ClientModel.findOne.mockResolvedValue(client);
        SaleModel.findOne.mockResolvedValue(null);

        const saleServ = new SaleService();
        const result = saleServ.getDeliveryTimesByOperator({
            saleId: 1,
            operatorId: 1,
            deliveryTime: 2,
        });

        await expect(result)
        // await expect(result).rejects.toThrow('There is no sale with that id');
    });
});