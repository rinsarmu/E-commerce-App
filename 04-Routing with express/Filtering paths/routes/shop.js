// const express = require('express')
// const route = express.Router()

// route.get("/", (req, res, next) =>{
//     console.log("From another middleware.")
//     res.send("<h1> Hello from Express! </h1>");

// })

const express = require('express')
const router = express.Router();

router.get("/", (req, res, next)=>{
    res.send("<h1> Hello from Express! </h1>");
}) 
module.exports = router;