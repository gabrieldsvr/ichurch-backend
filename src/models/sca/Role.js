const { DataTypes } = require('sequelize');
const {scaDB} = require('../../config/db');

const Role = scaDB.define('role', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    module_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: true,
});

// Cell.belongsToMany(require('./People'), { through: CellPerson, foreignKey: 'cell_id', as: 'members' });

module.exports = Role;
