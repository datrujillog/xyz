const { config } = require("../configs/config");
const app = require("../app");



app.listen(config.port, () => {
    console.log('Server listening on port 3000');

    console.log(`http://localhost:${config.port}`)
  
});