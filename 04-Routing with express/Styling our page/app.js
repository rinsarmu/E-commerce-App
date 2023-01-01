const express = require("express")
const bodyparser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')
const path = require("path")

const app = express()
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // should be execute on the top unless it's not working

//Routing
app.use('/admin', adminRoutes)  // add product page and redirect to product page
app.use(shopRoutes) // Product page
app.use(notFound) // IF page is not found


// app.use((req, res, next)=>{
//     res.status(404).send("<h1> Not found </h1>")
// })

// app.use(requestHandler)

app.listen(8000)
