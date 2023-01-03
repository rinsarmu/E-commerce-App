const fs = require('fs')
const path = require('path');
const rootDir = require('../utils/helper')
// const products = []

const p = path.join(rootDir, 'data', 'product.json') 

module.exports = class Product {
    constructor(title, description, price, imageUrl){
        this.title = title
        this.description =description
        this.price = price
        this.imageUrl = imageUrl
    }
    save() {
        let products = [];
        fs.readFile(p,(err, data ) =>{
            console.log('first')
           
            if(!err) {
                console.log('second')
                products = JSON.parse(data)  
                console.log('third')
                products.push(this)
                fs.writeFileSync(p,JSON.stringify(products));
                // fs.writeFile(p, JSON.stringify(products), err=>{
                //     console.log('written');
                //     if(err) console.log(err)
                //  })  
                console.log('written')
                 
            }
            else {
                console.log("Error");
            }    
            
                 
            
        })

       

    }

    static fetchAll(cb){
      fs(p, (err, data)=>{
        if(err) {
            cb([])
        } else  {
            cb(JSON.parse(data))
        }
       
      })
       
    }

}