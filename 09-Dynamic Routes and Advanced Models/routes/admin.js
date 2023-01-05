const express = require('express')
const path = require("path")
const router = express.Router();
const rootDir = require('../utils/helper');
const adminController = require('../controllers/adminController')
const products = [];

router.get("/add-product",adminController.getAddProduct )

router.get('/products',adminController.getProduct)
router.get('/edit--product/:productId',adminController.getEditProduct)

router.post('/product',adminController.postAddProduct)

module.exports = router;
