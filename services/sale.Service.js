
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

}
module.exports = SaleService;