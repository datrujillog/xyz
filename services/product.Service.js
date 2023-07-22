'use strict';

const { ProductModel } = require("../database");

class ProductService {
   constructor() {
      // this.ProductModel = new ProductModel();


   }
   async getProducts() {
      return 'Hello World...'
   }

   async createProduct(product) {

      const createdProduct = await ProductModel.create(product);
      return createdProduct;

   }

}

module.exports = ProductService;