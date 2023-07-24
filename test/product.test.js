

const ProductService = require("../services/product.Service");
const InventoryService = require("../services/inventory.Service");
const SaleService = require("../services/sale.Service");


const { ProductModel,InventoryModel,SaleModel,ClientModel,OperatorModel } = require('../database');



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
