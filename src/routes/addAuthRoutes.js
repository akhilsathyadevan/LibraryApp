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
    addAuthRouter.get('/add',function(req,res){
        res.send('book added successfully');
    });
    
    return addAuthRouter;
}
module.exports=addAuthor;