const express = require("express")
// const requestHandler = require('./routes');

const app = express()

app.use("/add-product", (req, res, next)=>{
    res.send("<h1> Add product page </h1>")
})

app.use("/", (req, res, next) =>{
    console.log("From another middleware.")
    res.send("<h1> Hello from Express! </h1>");

})
// app.use(requestHandler)

app.listen(8000)
