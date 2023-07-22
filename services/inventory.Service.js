
const { ProductModel, InventoryModel } = require("../database");



class InventoryService {


    // GET /inventario: Obtener el inventario completo de productos en stock.
    async getProductsInventory() {

        const products = await ProductModel.findAll({ include: InventoryModel });
        return products;
    }

    async createProductInventory(product) {

        const createdProduct = await InventoryModel.create(product);
        return createdProduct;

    }
}

module.exports = InventoryService;