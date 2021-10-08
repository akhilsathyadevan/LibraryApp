const express=require("express");
const addBookRouter=express.Router();
function addbooksRouter(nav){
   
    addBookRouter.get('/',function(req,res){
        res.render('addbook',
    {
        nav,
        title:'Libraryapp' 
    });
});
    
    return addBookRouter;
}
module.exports=addbooksRouter;