const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Operator = sequelize.define(
        "operator",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            clientId: {
                type: DataTypes.UUID,
                allowNull: false,
                unique: true,
              },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            }
        },
        {
            timestamps: true,
        }
    );
    return Operator;
};