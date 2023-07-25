const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Product = sequelize.define(
        "product",
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
            description: {
                type: DataTypes.STRING,
            },
            punctuation: {
                type: DataTypes.INTEGER,

            },
            creationDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updateDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        { timestamps: true }
    );
    return Product;
}

