const express = require('express')
const path = require("path")
const router = express.Router();
const rootDir = require('../utils/helper');
const productController = require('../controllers/product')
const products = [];

router.get("/add-product",productController.product )


router.post('/product',(req, res, next)=>{
    products.push({title: req.body.title})
    console.log(req.body)
    res.redirect('/').product })

exports.routes = router;
exports.products = products