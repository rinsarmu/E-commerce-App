const {Sequelize, INTEGER} = require('sequelize')

const sequilize = require('../utils/database')

const Cart = sequilize.define('cart', {
    id :{
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }

})

module.exports = Cart;