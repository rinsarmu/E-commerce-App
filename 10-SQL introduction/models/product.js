
const db = require('../utils/database')
const Cart = require('../models/cart');

module.exports = class Product {
    constructor(id,title, description, price, imageUrl){
        this.id = id
        this.title = title
        this.description =description
        this.price = price
        this.imageUrl = imageUrl
    }
    save() {
        
    }

    static fetchAll(cb) {
    }

    static delete(id){
     
   }
   

    static findById(id){
    }
}