const express = require("express")
const bodyparser = require('body-parser');
const adminRoutes = require("./routes/admin")
const shopRoutes = require('./routes/shop')
const notFound = require('./routes/404')
const path = require("path")
const sequelize = require('./utils/database')
const Product = require("./models/product")
const User = require("./models/user")

const Cart = require('./models/cart')
const CartItems = require('./models/cartItem')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // should be execute on the top unless it's not working

app.use((req, res, next)=>[
    User.findByPk(1)
    .then(user=>{
        // console.log("-----------------------\n", user , "\n-----------------------\n");
        req.user = user
        next();
    }).
    catch(err=>console.log(err))
])
 

//Routing
app.use('/admin', adminRoutes)  // add product page and redirect to product page
app.use(shopRoutes) // Product page
app.use(notFound) // If page is not found ..

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product)

User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: CartItems});
Product.belongsToMany(Cart, {through: CartItems});


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
    
    app.listen(8000)

})
.catch((err)=>{
    console.log("erro line 27");
    console.log(err);
})

