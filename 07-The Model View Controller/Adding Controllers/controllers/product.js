const products = [];

exports.getAddProduct = (req, res, next)=>{
    res.render('add-product', {pageTitle: "Add Product", path : req.url})
    
}

exports.postAddProduct = (req, res, next)=>{
    products.push({title: req.body.title})
    console.log(req.body)
    res.redirect('/').product }

    exports.getProduct = (req, res, next)=>{
        // const products = adminData.products
        console.log("shop", products)
        // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
        res.render('shop', {
            pageTitle: 'Product',
            prods: products,
            hasProduct: products.length > 0,
            path : req.url
        })
    }