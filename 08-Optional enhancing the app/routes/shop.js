

const express = require('express')
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/helper');
const adminData = require('./admin')
const shopController = require('../controllers/shopController')
router.get('/', shopController.getIndex ) 
router.get('/products', shopController.getProduct ) 
router.get('/cart', shopController.getCart ) 
router.get('/orders', shopController.getOrders ) 

router.get('/checkout', shopController.getCheckOut ) 

module.exports = router;