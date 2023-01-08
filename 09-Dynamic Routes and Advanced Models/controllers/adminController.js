// const products = [];

const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    res.render('admin/edit--product', {pageTitle: "Add Product",
    editing: false, path: req.url})   
}

exports.postAddProduct = (req, res, next)=>{
    const {title,description,price, imageUrl} = req.body
    const product = new Product(null, title, description, price, imageUrl);
    console.log(product);
    product.save()
    res.redirect('/') 
}

exports.getProduct = (req, res, next)=>{   
  return  Product.fetchAll(products=>{
       res.render('admin/products', {
           pageTitle: 'Admin Products',
           prods: products,
           hasProduct: products.length > 0,
           path : '/admin/products'
       })
   })
 
}

exports.getEditProduct = (req, res, next)=>{
    const editMode = req.query.edit;
    const productId = req.params.productId
    console.log("Edit Id: ",productId);
    if(!editMode){
        return res.redirect('/')
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
    console.log(id);
    console.log(updatedProduct);
    updatedProduct.save();
    res.redirect('/admin/products')
}

exports.postDeleteProduct = (req,res, next)=>{
    const id=req.body.productId
        Product.delete(id)
    res.redirect('/admin/product')
}