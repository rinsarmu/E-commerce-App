// const products = [];

const Product = require('../models/product')
// const Prct = require('../models/product')
// const {Product} = require('../models/product')
exports.getAddProduct = (req, res, next)=>{
    res.render('admin/edit--product', {pageTitle: "Add Product",
    editing: false, path: req.url})   
}

exports.postAddProduct = (req, res, next)=>{
    const {title,description,price, imageUrl} = req.body
    const product = new Product(title, description, price, imageUrl);
   
    Product.create({
        title: title,
        description: description,
        price:price,
        imageUrl: imageUrl
    })
    .then((result)=>{
        console.log("Saved!");
    })
    .catch(()=>{console.log(err)})
    
}

exports.getProduct = (req, res, next)=>{   
  Product.fetchAll()
  .then(([rows, fieldData])=>{
    console.log("+++++++++++++++++++++++++++++++++++");
    console.log(rows);
       res.render('admin/products', {
           pageTitle: 'Admin Products',
           prods: rows,
           hasProduct: rows.length > 0,
           path : '/admin/products'
       })
   })
   .catch(err=> console.log(err))
 
}

exports.getEditProduct = (req, res, next)=>{
    const editMode = req.query.edit;
    const productId = req.params.productId
    // console.log("Edit Id: ",productId);
    if(!editMode){
        return res.redirect('/admin/products')
    }
    Product.findById(productId, product =>{
        res.render('admin/edit--product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit--product',
            editing: editMode,
            product: product
    })
    })
}

exports.postEditProduct = (req, res, next)=>{
    const{id, price, title, description, imageUrl} = req.body;
    const updatedProduct = new Product(id, title, description, price, imageUrl)
    // console.log(id);
    // console.log(updatedProduct);
    updatedProduct.save();
    res.redirect('/admin/products')
}

exports.postDeleteProduct = (req,res, next)=>{
    const id=req.body.productId
        Product.delete(id)
        .then(()=>{
             res.redirect('/admin/products')

        })
        .catch(err=>console.log('erro'))
}

