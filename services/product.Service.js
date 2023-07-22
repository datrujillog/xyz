'use strict';

const { ProductModel } = require("../database");

class ProductService {
   constructor() {
      // this.ProductModel = new ProductModel();


   }
   async getProducts() {
      const products = await ProductModel.findAll();
      return products;
   }

   async createProduct(product) {

      const createdProduct = await ProductModel.create(product);
      return createdProduct;

   }

   async updateProduct(id, product) {
      const updatedProduct = await ProductModel.update(product, { where: { id } });
      return updatedProduct;
   }

}

module.exports = ProductService;