

const express = require('express')
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/helper');
const adminData = require('./admin')
const shopController = require('../controllers/shopController')
router.get('/', shopController.getIndex ) 
router.get('/products', shopController.getProducts ) 
router.get('/products/:productId', shopController.getProduct )  //It should be bottom if it have the same starting index with the other. eg /products/...

router.get('/cart', shopController.getCart ) 
router.get('/orders', shopController.getOrders ) 

router.get('/checkout', shopController.getCheckOut ) 

module.exports = router;