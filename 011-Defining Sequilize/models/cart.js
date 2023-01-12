const Sequelize = require('sequelize')

const sequilize = require('../utils/database')

const Cart = sequilize.define('cart', {
    id :{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    }

})

module.exports = Cart;