const express=require("express");
const addBookRouter=express.Router();
const bookdata=require('../model/bookdata');
function addbooksRouter(nav){
   
    addBookRouter.get('/',function(req,res){
        res.render('addbook',
    {
        nav,
        title:'Libraryapp' 
    });
    });
    addBookRouter.post('/add',function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }
        var book=bookdata(item);
        book.save();
        res.redirect('/books');

    });
    
    return addBookRouter;
}
module.exports=addbooksRouter;