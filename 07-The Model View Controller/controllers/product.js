const products = [];

exports.getAddProduct = (req, res, next)=>{
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTitle: "Add Product", path : req.url})
    
}