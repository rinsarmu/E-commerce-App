

const express = require('express')
const router = express.Router();
const path = require('path');

const rootDir = require('../utils/helper');

router.use((req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', '404.html'))
    res.render('404', {pageTitle: '404', path : req.url})
}) 
module.exports = router;