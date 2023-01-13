const {Sequelize, INTEGER} = require('sequelize')

const sequilize = require('../utils/database')

const CartItems = sequilize.define('cartItems', {
    id :{
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quantity: INTEGER

})

module.exports = CartItems;