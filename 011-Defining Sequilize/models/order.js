const {Sequelize, INTEGER} = require('sequelize')

const sequilize = require('../utils/database')

const Order = sequilize.define('order', {
    id :{
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }

})

module.exports = Order;