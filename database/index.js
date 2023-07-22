const { Sequelize } = require('sequelize');

const { config } = require("../configs/config");

// importar modelos



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


// relacion entre modelos


// exportar modelos
module.exports = {
    conn:sequelize,
    // modelos  
}