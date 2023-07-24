'use strict';

const { ProductModel, InventoryModel, ClientModel, SaleModel, OperatorModel } = require("../database");
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
      if (product.quantity > inventory.stock) throw new Error("Not enough stock");
      const newQuantity = inventory.stock - product.quantity;
      const resta = inventory.stock - newQuantity;

      const solid = inventory.solid + product.quantity;

      const newSale = await SaleModel.create({ quantity: resta, productId: id, clientId: product.clientId });

      //actualizar en la tabla productos el punctuation
      const updatepunctuation = await ProductModel.update({ punctuation: product.punctuation }, { where: { id } });

      const updatedInventory = await InventoryModel.update({ stock: newQuantity, solid: solid }, { where: { productId: id } });

      return {
         newSale,
         updatedInventory
      }

   }


   async getProductScores() {
      const products = await ProductModel.findAll({
         include: [
            {
               model: SaleModel,
               include: [ClientModel],
            },
         ],
      });

      const productScores = {};

      products.forEach((product) => {
         const sales = product.sales;
         if (sales.length > 0) {
            const totalScore = sales.reduce((sum, sale) => sum + sale.client.punctuation, 0);
            const averageScore = totalScore / sales.length;
            productScores[product.name] = averageScore;
         } else {
            productScores[product.name] = 0;
         }
      });

      return productScores;

   }

   
   async getProductStatistics() {
      
         const products = await ProductModel.findAll({
            include: [SaleModel],
         });
         
         const productStatistics = products.map((product) => {
            const sales = product.sales;
            const totalSales = sales.length;
            const totalRevenue = sales.reduce((total, sale) => total + sale.quantity * sale.price, 0); 
            const averagePrice = totalRevenue / totalSales;

            return {
               product: product.name,
               totalSales,
               totalRevenue,
               averagePrice,
            };
         });

         return productStatistics;
      
   }
}

module.exports = ProductService;