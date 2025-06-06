const {DataTypes} = require('sequelize');
const {scaDB} = require('../../config/db');

const Permission = scaDB.define('permission', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: true,
    underscored: true
});


module.exports = Permission;

