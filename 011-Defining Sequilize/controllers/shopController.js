// const products = [];

const Product = require('../models/product')
const Cart = require('../models/cart')
const e = require('express')

exports.getProducts = (req, res, next)=>{
        
    Product.findAll()
    .then(products=>{
        res.render('shop/product--list', {
            pageTitle: 'All Product',
            prods: products,
            hasProduct: products.length > 0,
            path : req.url
        })
    }).catch(err=>console.log(err))
 
}

exports.getIndex = (req, res, next)=>{
    Product.findAll()
    .then(products=>{
        res.render('shop/product--list', {
            pageTitle: 'All Product',
            prods: products,
            hasProduct: products.length > 0,
            path : '/'
        })
    })
    .catch(err=>console.log(err))
}

exports.getCart = (req, res, next)=>{
    console.log("cart is cclicked");

    req.user.getCart().then(cart=>{
        console.log(cart);
      return  cart.
      getProducts()
      .then(products=>{
        res.render("shop/cart", {
            pageTitle: 'Cart',
            hasProduct: products.length > 0,
            path : req.url,
            products: products
        })
      }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))

}

exports.postCart = (req, res, next)=>{
    // const prodId = req.body.productId
    // Product.findById(prodId, (product)=>{
    //     // console.log("object");
    //     // console.log("pric : ", product.price);
    //     Cart.addProduct(prodId, product.price)

    // })
    // console.log(prodId);
    res.redirect('/cart')
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



      
 exports.getProduct = (req, res, next) =>{
        const prodId = req.params.productId;
        console.log("dddd", prodId);
        Product.findAll({where: {id:prodId}})
        .then(products=>{
            res.render('shop/product--detail',{
                pageTitle: "Product Detail",
                path: req.url,
                product: products[0]

            })

        })
        .catch(err=>console.log(err))
        // Product.findById()
        // .then(rows=>{
        //     console.log(rows[0].title);
        //    return res.render('shop/product--detail', {
        //         pageTitle: "Detail product",
        //         path: req.url,
        //         product: rows[0]
        //      })
        // })
        // .catch(err=>console.log(err));

        
    }

    exports.postDeleteCart= (req, res, next)=>{
        const cartId = req.body.productId
        Product.findById(cartId, product=>{
            Cart.updatingProduct(cartId,product.price)
        })
        res.redirect('/cart')
    }