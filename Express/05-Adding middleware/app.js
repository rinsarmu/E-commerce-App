const express = require("express")

const app = express()

app.use((req, res, next)=>{
    console.log("From the middleware")
    next(); // used to call another middleware in the code; or allows to the request in the another middlewar in line
})

app.use((req, res, next) =>{
    console.log("From another middleware.")
    res.send("<h1> Hello from Express! </h1>"); 
    // after send a response we cant call next method().
})

app.listen(8000)
