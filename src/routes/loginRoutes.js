const express=require("express");
const loginRouter=express.Router();
function login(nav){
   
    loginRouter.get('/',function(req,res){
        res.render('login',
    {
        nav,
        title:'Libraryapp' 
    });
    });
    
    return loginRouter;
}
module.exports=login;