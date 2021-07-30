
exports.pageNotFound = (req,res)=>{
    res.status(400).render('404',{pageTitle : 'Page Not Found'});
}