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


exports.getCart = (req, res, next) => {
  req.user
    .getCart()
    .then(cart => {
      return cart
        .getProducts()
        .then(products => {
          res.render('shop/cart', {
            path: '/cart',
            pageTitle: 'Your Cart',
            products: products
          });
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
};



exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    let fetchedCart;
    let newQuantity = 1;
    req.user
      .getCart()
      .then(cart => {
        fetchedCart = cart;
        console.log("\n+++++++++++++++++++++++\n");
        // console.log(cart);
        // cart.getProducts().then(c=>console.log(c)).catch(err=>console.log(err))
        return cart.getProducts({ where: { id: prodId } });
      })
      .then(products => {
        let product;
        if (products.length > 0) {
          product = products[0];
        }

        if (product) {
          const oldQuantity = product.cartItems.quantity;
          newQuantity = oldQuantity + 1;
          return product;
        }
        return Product.findByPk(prodId);
      })
      .then(product => {
        return fetchedCart.addProduct(product, {
          through: { quantity: newQuantity }
        });
      })
      .then(() => {
        console.log("\n+++++++++++++++++++++++\n");

        res.redirect('/cart');
      })
      .catch(err => console.log(err));
  };
  
  exports.postOrder = (req,res,next)=>{
req.user.getCart()
.then(cart=>{
  return cart.getProducts();
})
.then(products=>{
  console.log(products);
})

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
    
    }

    exports.postDeleteCart= (req, res, next)=>{
        const cartId = req.body.productId

        req.user.getCart()
          .then(cart=>{
            return cart.getProducts({where: {id: cartId}})
          }).then(products=>{
            let product = products[0]
          return  product.cartItems.destroy();
          })
          .then(result=>{
            res.redirect('/cart')
          })
          .catch(err=>console.log(err))
  
    }

