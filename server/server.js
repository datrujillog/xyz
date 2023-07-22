const { config } = require("../configs/config");
const app = require("../app");
const { conn } = require("../database");


conn.sync({ force: false }).then(() => {
    console.log("")
    console.log("") 
    console.log("Base de datos conectada");

    console.log("")

    app.listen(config.port, () => {
        console.log("")
        console.log(`Server is running on port ${config.port} in " ${config.env} " mode`);
        console.log("")
        console.log(`http://localhost:${config.port}`);

    });
}); 
