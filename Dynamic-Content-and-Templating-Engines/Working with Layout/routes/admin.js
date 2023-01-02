const express = require('express')
const path = require("path")
const router = express.Router();
const rootDir = require('../utils/helper');

const products = [];

router.get("/add-product", (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTitle: "Add Product", path : req.url})
    
})


router.post('/product', (req, res, next)=>{
    products.push({title: req.body.title})
    console.log(req.body)
    res.redirect('/')
})

exports.routes = router;
exports.products = products