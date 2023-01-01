const express = require("express")
const bodyparser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')

const app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use(notFound)

app.listen(8000)
