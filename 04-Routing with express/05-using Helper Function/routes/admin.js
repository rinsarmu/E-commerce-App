const express = require('express')
const path = require("path")
const router = express.Router();
const rootDir = require('../utils/helper');

router.get("/add-product", (req, res, next)=>{
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    
})


router.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;