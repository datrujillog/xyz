const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Client = sequelize.define(
        "client",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            address: {
                type: DataTypes.STRING,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,

            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        { timestamps: true }
    );
    return Client;
}