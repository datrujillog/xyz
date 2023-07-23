
const { ProductModel, InventoryModel } = require("../database");



class InventoryService {


    async getProductsInventory() {
        const products = await ProductModel.findAll({ include: InventoryModel });
        let totalStock = 0;
        let totalVendidos = 0;

        products.forEach((product) => {
            totalStock += product.inventory.stock;
            totalVendidos += product.inventory.solid;
        });
        return {
            count: products.length,
            totalStock,
            totalVendidos,
        };

    }

    async createProductInventory(product) {

        const createdProduct = await InventoryModel.create(product);
        return createdProduct;
    }

    async invetoryById(id) {
        try {

            const inventory = await InventoryModel.findOne({ where: { productId: id } });
            if (!inventory) throw new Error("There is no product with that id");
            
            return inventory;
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }

}

module.exports = InventoryService;