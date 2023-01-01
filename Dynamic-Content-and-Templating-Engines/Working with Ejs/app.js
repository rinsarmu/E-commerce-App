const express = require("express")
const bodyparser = require('body-parser');
const adminData = require("./routes/admin")
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')
const path = require("path")

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // should be execute on the top unless it's not working

//Routing
app.use('/admin', adminData.routes)  // add product page and redirect to product page
app.use(shopRoutes) // Product page
app.use(notFound) // If page is not found


app.listen(8000)
