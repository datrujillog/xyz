
const { Op } = require('sequelize');

const { ClientModel, SaleModel } = require("../database");



class SaleService {
    constructor() { }

    async getSales() {
        return "sales Services";
    }


    async getTopCustomers() {
        const customers = await ClientModel.findAll({ include: SaleModel });
        const totalSalesByCustomer = {};

        customers.forEach((customer) => {
            const totalSales = customer.sales.reduce((acc, sale) => acc + sale.quantity, 0);
            totalSalesByCustomer[customer.name] = totalSales;
        });
        const sortedCustomers = Object.entries(totalSalesByCustomer).sort((a, b) => b[1] - a[1]);

        return sortedCustomers;
    }

    async getDeliveryTimesByOperator(product) {
        const client = await ClientModel.findOne({ where: { id: product.operatorId } });
        if (!client) throw new Error("There is no client with that id");

        const sale = await SaleModel.findOne({ where: { id: product.saleId } });
        if (!sale) throw new Error("There is no sale with that id");

        const updatedSale = await SaleModel.update({ deliveryTime: product.deliveryTime, operatorId:product.operatorId }, { where: { id: product.saleId } });

        return {
            msg: "Time delivery made successfully",
            updatedSale
        }

    }

}
module.exports = SaleService;