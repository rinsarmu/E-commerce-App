// const express = require('express')
// const route = express.Router()

// route.get("/", (req, res, next) =>{
//     console.log("From another middleware.")
//     res.send("<h1> Hello from Express! </h1>");

// })

const express = require('express')
const router = express.Router();
const path = require("path")

router.get("/", (req, res, next)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'))
    // res.send("<h1> Hello from Express! </h1>");
}) 
module.exports = router;