const { Sequelize, Model, DataTypes } = require('sequelize');
const { sequelize } = require("../db/sequlize")


class User extends Model {}

User.init({
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: 'User' })


User.sync();
module.exports = User;