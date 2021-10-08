const express=require("express");
const addAuthRouter=express.Router();
function addAuthor(nav){
   
    addAuthRouter.get('/',function(req,res){
        res.render('addauthor',
    {
        nav,
        title:'Libraryapp' 
    });
    });
    
    return addAuthRouter;
}
module.exports=addAuthor;