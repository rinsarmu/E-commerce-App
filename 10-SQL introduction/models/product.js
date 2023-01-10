
const db = require('../utils/database')
const Cart = require('../models/cart');

module.exports = class Product {
    constructor(title, description, price, imageUrl){
        // this.id = id
        this.title = title
        this.description =description
        this.price = price
        this.imageUrl = imageUrl
    }
    save() {
     return db.execute('INSERT INTO products (title, description,price, imageUrl) VALUES(?,?,?,?) ', [this.title, this.description, this.price, this.imageUrl]);
        
    }

    static fetchAll() {
      return  db.execute('SELECT  * FROM products');
    }

    static delete(id){
      console.log("ID............", id);
     return db.execute('Delete from products where id= ?',[id])
     
   }
   

    static findById(id){
     return db.execute('SELECT * FROM products where products.id= ?', [id])
    }
}


