const { Sequelize } = require('sequelize');

const { config } = require("../configs/config");

// importar modelos
const ProductModel = require("./models/product.Model");



// vamos a crear una instancia de sequelize
const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    dialect: "mysql",
    port: config.dbPort,
    logging: false,
    define: {
        timestamps: false,
    },
});

// vamos a crear los modelos
const Product = ProductModel(sequelize);


// relacion entre modelos


// exportar modelos
module.exports = {
    conn:sequelize,
    // modelos  
    ProductModel:Product,
}