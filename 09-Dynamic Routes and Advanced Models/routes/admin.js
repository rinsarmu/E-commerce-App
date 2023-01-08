const express = require('express')
const path = require("path")
const router = express.Router();
const rootDir = require('../utils/helper');
const adminController = require('../controllers/adminController')
const products = [];

router.get("/add-product",adminController.getAddProduct )

router.get('/product',adminController.getProduct)
router.get('/edit--product/:productId',adminController.getEditProduct)
router.post('/delete-product/:productId',adminController.postDeleteProduct)


router.post('/product',adminController.postAddProduct)
router.post('/edit-product',adminController.postEditProduct)


module.exports = router;
