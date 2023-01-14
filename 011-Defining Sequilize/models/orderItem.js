const {Sequelize, INTEGER} = require('sequelize')

const sequilize = require('../utils/database')

const OrderItem = sequilize.define('orderItem', {
    id :{
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }

})

module.exports = OrderItem;