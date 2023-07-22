const { Sequelize } = require('sequelize');

const { config } = require("../configs/config");

// importar modelos
const ProductModel = require("./models/product.Model");
const InventoryModel = require("./models/Inventory.Model");
const SaleModel = require("./models/sales.Model");
const ClientModel = require("./models/client.Model");



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
const Inventory = InventoryModel(sequelize);
const Sale = SaleModel(sequelize);
const Client = ClientModel(sequelize);


// relacion entre modelos

// Relación con la tabla Product
Inventory.belongsTo(Product, { foreignKey: 'productId' });
Product.hasOne(Inventory, { foreignKey: 'productId' });

//Relación con la tabla Client y Sale
Sale.belongsTo(Client, { foreignKey: 'clientId' });
Client.hasMany(Sale, { foreignKey: 'clientId' });



// exportar modelos
module.exports = {
    conn:sequelize,
    // modelos  
    ProductModel:Product,
    InventoryModel:Inventory,
    SaleModel:Sale,
    ClientModel:Client
}