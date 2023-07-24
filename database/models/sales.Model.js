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
            operatorId: {
                type: DataTypes.UUID,
            },
            saleDate: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,

            },
            deliveryTime: {
                type: DataTypes.DECIMAL(5, 2),
                validate: { // Validar que el tiempo de entrega sea entre 0 y 24 horas
                    min: 0,
                    max: 24,
                },
            },
        },
        { timestamps: true }
    );
    return Sale;
}