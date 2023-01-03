const express = require('express')
const path = require("path")
const router = express.Router();
const rootDir = require('../utils/helper');
const productController = require('../controllers/product')
const products = [];

router.get("/add-product",productController.getAddProduct )


router.post('/product',productController.postAddProduct)

module.exports = router;
