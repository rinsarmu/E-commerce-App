// const products = [];

const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getProducts = (req, res, next)=>{
        
    Product.fetchAll(products=>{
       res.render('shop/product--list', {
           pageTitle: 'All Product',
           prods: products,
           hasProduct: products.length > 0,
           path : req.url
       })
   }) 
}

exports.getIndex = (req, res, next)=>{
    Product.fetchAll(products=>{
        res.render('shop/index', {
            pageTitle: 'Product',
            prods: products,
            hasProduct: products.length > 0,
            path : '/'
        })
    }) 
}

exports.getCart = (req, res, next)=>{
    Cart.getCart(carts=>{

        Product.fetchAll(products=>{
            const cartProducts = [];
            for(const product of products){
                const cartProductData = carts.products.find(prod => prod.id ===product.id)
                if(cartProductData) {
                    cartProducts.push({productData: product, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart', {
                pageTitle: 'Cart',
                hasProduct: products.length > 0,
                path : req.url,
                products: cartProducts
            })
        }) 
    })
}

exports.postCart = (req, res, next)=>{
    const prodId = req.body.productId
    Product.findById(prodId, (product)=>{
        // console.log("object");
        // console.log("pric : ", product.price);
        Cart.addProduct(prodId, product.price)

    })
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
        const id = req.params.productId;
        Product.findById(id, product=>{
            // console.log(product);
            res.render('shop/product--detail', {
               pageTitle: "Detail product",
               path: req.url,
               product: product,
            })
        })
    }

    exports.postDeleteCart= (req, res, next)=>{
        const cartId = req.body.productId
        Product.findById(cartId, product=>{
            Cart.updatingProduct(cartId,product.price)
        })
        // console.log("Post delete cart", cartId);
        res.redirect('/cart')
    }