const { ClientModel } = require("../database");


class ClientService{
    constructor(){}

    async createClient(client){
        const createdClient = await ClientModel.create(client);
        return {
            message: "Client created successfully",
            clients : createdClient
        };
    }
}
module.exports = ClientService;