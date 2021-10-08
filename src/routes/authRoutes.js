const express=require("express");
const authorRouter=express.Router();
function authRouter(nav){
    var auth=[
        {
            name:'Joseph Barbera',
            writings:'The Flintstones,Tom and Jerry',
            img:'Barbera.jpg'
            
        },
        {
            name:'J.K Rowling',
            writings:'Harry Potter, Fantastic Beasts and Where to Find Them',
            img:'rowling.jpg'
            
        },
        {
            name:'Vaikom Muhammad Basheer',
            writings:'Pathummayude Aadu,Mathilukal',
            img:'basheer.jpg'
        }
        

    ];
    authorRouter.get('/',function(req,res){
        res.render('authors',
    {
        nav,
        title:'Libraryapp' ,auth
    });
});
    authorRouter.get('/:i',function(req,res){
        const id=req.params.i;
        res.render('author',
    {
        nav,
        title:'Libraryapp',
        author :auth[id]
    
    });
    });
    return authorRouter;
}
module.exports=authRouter;