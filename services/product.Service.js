'use strict';

const { ProductModel, InventoryModel } = require("../database");
const InventoryService = require("./inventory.Service");
class ProductService {
   constructor() {
      // this.ProductModel = new ProductModel();
      this.InventoryServ = new InventoryService();


   }
   // GET /inventario: Obtener el inventario completo de productos en stock.
   async getProducts() {


   }

   async createProduct(product) {

      const createdProduct = await ProductModel.create(product);
      return createdProduct;

   }

   async updateProduct(id, product) {
      const updatedProduct = await ProductModel.update(product, { where: { id } });
      return updatedProduct;
   }

   async deleteProduct(id) {
      const deletedProduct = await ProductModel.destroy({ where: { id } });
      return deletedProduct;
   }


   async sellProduct(id, product) {

      const inventory = await this.InventoryServ.invetoryById(id);
      if (product.stock > inventory.stock) throw new Error("Not enough stock");
      
      const newQuantity = inventory.stock - product.stock;
      const solid = inventory.solid + product.stock;

      const updatedInventory = await InventoryModel.update({ stock: newQuantity, solid: solid }, { where: { productId: id } });

      return {
         updatedInventory,
      }

   }



}

module.exports = ProductService;