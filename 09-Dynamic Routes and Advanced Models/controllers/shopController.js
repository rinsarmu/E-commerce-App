// const products = [];

const Product = require('../models/product')


exports.getIndex = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/product--list', {
            pageTitle: 'Product',
            prods: products,
            hasProduct: products.length > 0,
            path : '/'
        })
    }) 
}

exports.getCart = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/cart', {
            pageTitle: 'Cart',
            hasProduct: products.length > 0,
            path : req.url
        })
    }) 


}

exports.getOrders = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/orders', {
            pageTitle: 'Your Orders',
            hasProduct: products.length > 0,
            path : req.url
        })
    }) 

    
}

exports.getCheckOut = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/checkout', {
            hasProduct: products.length > 0,
            path : req.url
        })
    }) 
}


    exports.getProduct = (req, res, next)=>{
        
         Product.fetchAll(products=>{
            res.render('shop/product--list', {
                pageTitle: 'All Product',
                prods: products,
                hasProduct: products.length > 0,
                path : req.url
            })
        })
      
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
        
    }