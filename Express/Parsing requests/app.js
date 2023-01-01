const express = require("express")
const bodyparser = require('body-parser');

const app = express()
app.use(bodyparser.urlencoded({extended: false}))
app.get("/add-product", (req, res, next)=>{
    res.send("<form action = '/product' method = 'POST' >  <input type = 'text' name = 'title' /> <button > Add </button > </form>")
})

app.post('/product', (req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.get("/", (req, res, next) =>{
    console.log("From another middleware.")
    res.send("<h1> Hello from Express! </h1>");

})
// app.use(requestHandler)

app.listen(8000)
