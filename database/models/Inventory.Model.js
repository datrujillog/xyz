const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Inventory = sequelize.define(
        "inventory",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            productId: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            solid: {
                type: DataTypes.INTEGER,
            }
        },
        { timestamps: true }
    );
    return Inventory;
}