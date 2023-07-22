const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Inventory = sequelize.define(
        "inventory",
        {
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            operator: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: true }
    );
    return Inventory;
}