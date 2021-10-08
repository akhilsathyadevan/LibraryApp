const express=require("express");
const signupRouter=express.Router();
function signup(nav){
   
    signupRouter.get('/',function(req,res){
        res.render('signup',
    {
        nav,
        title:'Libraryapp' 
    });
    });
    
    return signupRouter;
}
module.exports=signup;