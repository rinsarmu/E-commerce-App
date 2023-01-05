const path = require('path');
const rootDir = require('../utils/helper');
const fs = require('fs');
const p = path.join(rootDir, 'data', 'cart.json')

module.exports = class Cart{
    static addProduct(id, productPrice){
        //fetch previous cart

        fs.readFile(p, (err, data)=>{
            let cart = {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(data)
            }
            //Analyze the cart => Find existing product
            let existingProduct, existingProductIndex, updatedProduct

          
            existingProductIndex = cart.products.findIndex(prod=> prod.id === id)
            existingProduct = cart.products[existingProductIndex]
                 console.log("Exisitng product");
                 console.log(existingProduct);
                 console.log("Exisitng indexproduct");
                 console.log(existingProductIndex);
            
            //Add new product / increase quantity
            
            
            if(existingProduct){
                updatedProduct ={...existingProduct}
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct

            }
            else{
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice

            fs.writeFile(p, JSON.stringify(cart), err=>{
                console.log(err);
            })


        })


    }
}