const express = require("express")
const bodyparser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRoutes = require('./routes/shop')
const app = express()
app.use(bodyparser.urlencoded({extended: false}))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

// app.use((req, res, next)=>{
//     res.status(404).send("<h1> Not found </h1>")
// })

// app.use(requestHandler)

app.listen(8000)
