const express = require("express")
const bodyparser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')
const path = require("path")
const sequelize = require('./utils/database')
const Product = require("./models/product")
const User = require("./models/user")



const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // should be execute on the top unless it's not working

 

//Routing
app.use('/admin', adminRoutes)  // add product page and redirect to product page
app.use(shopRoutes) // Product page
app.use(notFound) // If page is not found ..

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
// User.hasMany(Product)

sequelize
// .sync( {force:true})
.sync( )
.then((result)=>{
    return User.findByPk(1)
    // console.log(result);
    
    
})
.then(user=>{
    if(!user) {
        User.create({name: "Roba", email: "roba@gmail.com"})
    }
    return user;
})
.then(user=>{
    console.log(user);
    console.log("\n \n User created \n");
    app.listen(8000)

})
.catch(()=>{
    console.log("erro line 27");
})

