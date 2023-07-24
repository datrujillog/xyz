const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Sale = sequelize.define(
        "sale",
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
            clientId: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            saleDate: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
        },
        { timestamps: true }
    );
    return Sale;
}