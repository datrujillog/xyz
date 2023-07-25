

const ProductService = require("../services/product.Service");
const InventoryService = require("../services/inventory.Service");
const SaleService = require("../services/sale.Service");


const { ProductModel, InventoryModel, SaleModel, ClientModel, OperatorModel } = require('../database');



jest.mock('../database');

describe('createProduct', () => {
    it('should create a new product', async () => {
        const product = { name: 'Test Product', price: 10 };
        const createdProduct = { id: 1, ...product };
        ProductModel.create.mockResolvedValue(createdProduct);

        const productService = new ProductService();
        const result = await productService.createProduct(product);

        expect(ProductModel.create).toHaveBeenCalledWith(product);
        expect(result).toEqual(createdProduct);
    });
});

describe('updateProduct', () => {
    it('should update a product', async () => {
        const id = 1;
        const product = { name: 'Test Product', price: 10 };
        const updatedProduct = [1];
        ProductModel.update.mockResolvedValue(updatedProduct);

        const productService = new ProductService();
        const result = await productService.updateProduct(id, product);

        expect(ProductModel.update).toHaveBeenCalledWith(product, { where: { id } });
        expect(result).toEqual(updatedProduct);
    });
});

describe('deleteProduct', () => {
    it('should delete a product', async () => {
        const id = 1;
        const deletedProduct = 1;
        ProductModel.destroy.mockResolvedValue(deletedProduct);

        const productService = new ProductService();
        const result = await productService.deleteProduct(id);

        expect(ProductModel.destroy).toHaveBeenCalledWith({ where: { id } });
        expect(result).toEqual(deletedProduct);
    });
});


describe('getProductScores', () => {
    it('should return the average score for each product', async () => {
        const products = [
            {
                id: 1,
                name: 'Product 1',
                sales: [
                    { id: 1, quantity: 1, clientId: 1, client: { id: 1, name: 'Client 1', punctuation: 4 } },
                    { id: 2, quantity: 2, clientId: 2, client: { id: 2, name: 'Client 2', punctuation: 3 } },
                ],
            },
            {
                id: 2,
                name: 'Product 2',
                sales: [
                    { id: 3, quantity: 1, clientId: 1, client: { id: 1, name: 'Client 1', punctuation: 5 } },
                    { id: 4, quantity: 1, clientId: 3, client: { id: 3, name: 'Client 3', punctuation: 2 } },
                ],
            },
        ];

        ProductModel.findAll.mockResolvedValue(products);

        const productService = new ProductService();
        const result = await productService.getProductScores();

        expect(ProductModel.findAll).toHaveBeenCalled();
        expect(result).toEqual({
            'Product 1': 3.5,
            'Product 2': 3.5,
        });
    });

    it('should return 0 for products with no sales', async () => {
        const products = [
            {
                id: 1,
                name: 'Product 1',
                sales: [],
            },
            {
                id: 2,
                name: 'Product 2',
                sales: [],
            },
        ];

        ProductModel.findAll.mockResolvedValue(products);

        const productService = new ProductService();
        const result = await productService.getProductScores();

        expect(ProductModel.findAll).toHaveBeenCalled();
        expect(result).toEqual({
            'Product 1': 0,
            'Product 2': 0,
        });
    });
});


describe('getProductStatistics', () => {
    it('should return statistics for each product', async () => {
        const products = [
            {
                id: 1,
                name: 'Product 1',
                sales: [
                    { id: 1, quantity: 1, price: 10 },
                    { id: 2, quantity: 2, price: 20 },
                ],
            },
            {
                id: 2,
                name: 'Product 2',
                sales: [
                    { id: 3, quantity: 1, price: 30 },
                    { id: 4, quantity: 1, price: 40 },
                ],
            },
        ];

        ProductModel.findAll.mockResolvedValue(products);

        const productService = new ProductService();
        const result = await productService.getProductStatistics();

        expect(ProductModel.findAll).toHaveBeenCalled();
        expect(result).toEqual([
            {
                product: 'Product 1',
                totalSales: 2,
                totalRevenue: 50,
                averagePrice: 25,
            },
            {
                product: 'Product 2',
                totalSales: 2,
                totalRevenue: 70,
                averagePrice: 35,
            },
        ]);
    });

    it('should return an empty array if there are no products', async () => {
        ProductModel.findAll.mockResolvedValue([]);

        const productService = new ProductService();
        const result = await productService.getProductStatistics();

        expect(ProductModel.findAll).toHaveBeenCalled();
        expect(result).toEqual([]);
    });
});