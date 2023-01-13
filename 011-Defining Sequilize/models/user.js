const {Sequelize, INTEGER,STRING} = require('sequelize');
const sequelize = require('../utils/database')

const User = sequelize.define('user', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name :{
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    }

})

module.exports = User;