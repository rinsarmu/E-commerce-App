// const products = [];

const Product = require('../models/product')
exports.getAddProduct = (req, res, next)=>{
    res.render('admin/add-product', {pageTitle: "Add Product", path : req.url})
    
}

exports.postAddProduct = (req, res, next)=>{
    const {title,description,price, imageUrl} = req.body
    const product = new Product(title, description, price, imageUrl);
    console.log(product)
    product.save()
    res.redirect('/') 
}

    exports.getProduct = (req, res, next)=>{
        
         Product.fetchAll(products=>{
            res.render('shop/product--list', {
                pageTitle: 'Product',
                prods: products,
                hasProduct: products.length > 0,
                path : req.url
            })
        })
      
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
        
    }