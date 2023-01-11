exports.getError = (req, res, next)=>{
    res.render('404', {pageTitle: '404', path : req.url})
}