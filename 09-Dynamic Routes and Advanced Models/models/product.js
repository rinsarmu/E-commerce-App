const fs = require('fs')
const path = require('path');
const rootDir = require('../utils/helper')
const Cart = require('../models/cart')


const p = path.join(rootDir, 'data', 'product.json') 

const getProductFromFile = (cb) =>{
    fs.readFile(p, (err, data)=>{
        if(err) {
            cb([])
        } else  {
            cb(JSON.parse(data))
        }
       
      })
}


module.exports = class Product {
    constructor(id,title, description, price, imageUrl){
        this.id = id
        this.title = title
        this.description =description
        this.price = price
        this.imageUrl = imageUrl
    }
    save() {
        getProductFromFile(products=>{
            if(this.id) {
                console.log("product ID: ", this.id);
                const existingProductIndex = products.findIndex(prod => prod.id === this.id);

                console.log("existingProductIndex : ", existingProductIndex);
                const updatedProduct = [...products];
                updatedProduct[existingProductIndex] = this
            fs.writeFileSync(p,JSON.stringify(updatedProduct));

            } else{

            this.id = (Math.random()+ 1).toString();
            products.push(this)
            fs.writeFileSync(p,JSON.stringify(products));
        }

           
        })
                
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
      }

      static delete(id){
        console.log("deletehhhhhhhhhhhhhh");
        getProductFromFile(products=>{
           const updatedProduct = products.filter(prod=>prod.id!= id)
           const product = products.find(prod=>prod.id == id)
           console.log(product.price);
           fs.writeFile(p, JSON.stringify(updatedProduct), err=>{
            if(!err){
                Cart.updatingProduct(id, product.price)

            }
           })
       })
   }
   

    static findById(id, cb){
        getProductFromFile(products =>{
            const product = products.find(p => p.id == id)
            cb(product)
        })
    }

}