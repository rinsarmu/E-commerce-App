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

exports.postCart = (req, res, next)=>{
    const prodId = req.body.productId
    console.log(prodId);
    res.redirect('/')
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


    exports.getProducts = (req, res, next)=>{
        
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

    exports.getProduct = (req, res, next) =>{
        const id = req.params.productId;
        Product.findById(id, product=>{
            console.log(product);
            res.render('shop/product--detail', {
               pageTitle: "Detail product",
               path: req.url,
               product: product,
            })
        })
    }