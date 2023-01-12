const Sequelize = require('sequelize')

const sequilize = require('../utils/database')

const CartItems = sequilize.define('cartItems', {
    id :{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    quantity: Sequelize.INTEGER

})

module.exports = CartItems;