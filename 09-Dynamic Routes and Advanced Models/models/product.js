const fs = require('fs')
const path = require('path');
const rootDir = require('../utils/helper')

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
    constructor(title, description, price, imageUrl){
        this.title = title
        this.description =description
        this.price = price
        this.imageUrl = imageUrl
    }
    save() {
        this.id = (Math.random()+ 1).toString();
        getProductFromFile(products=>{
            products.push(this)
            fs.writeFileSync(p,JSON.stringify(products));
           
        })
                

       

    }

    static fetchAll(cb){
      getProductFromFile(cb)
       
    }

    static findById(id, cb){
        getProductFromFile(products =>{
            const product = products.find(p => p.id == id)
            cb(product)
        })
    }

}