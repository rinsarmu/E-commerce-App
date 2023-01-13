const { Model } = require('sequelize');
const {Sequelize,INTEGER, STRING,DOUBLE} = require('sequelize');

const sequelize = require('../utils/database')

const Product = sequelize.define('product',{
  id:{
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: STRING,
  price: {
    type: DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: STRING,
    allowNull: false

  },
  description: {
    type: STRING,
    allowNull: false

  }
} )

module.exports = Product;