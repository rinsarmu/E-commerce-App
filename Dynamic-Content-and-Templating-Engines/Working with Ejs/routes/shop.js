

const express = require('express')
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/helper');
const adminData = require('./admin')

router.get('/', (req, res, next)=>{
    const products = adminData.products
    console.log("shop", products)
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    res.render('shop', {
        pageTitle: 'Product',
        products: products,
        hasProduct: products.length > 0
    })
}) 
module.exports = router;