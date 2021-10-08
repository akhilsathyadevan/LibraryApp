const express=require("express");
const booksRouter=express.Router();
function router(nav){
    var books=[
        {
            title:"Tom and Jerry",
            author:"Joseph Babera",
            gener:"cartoon",
            img:"tom.jpg"
        },
        {
            title:"Harry Poter",
            author:"J.K Rowling",
            gener:"Fantay",
            img:"harry.jpg"
        },
        {
            title:"Pathummayude Aadu",
            author:"Basheer",
            gener:"Drama",
            img:"basheer.jpg"
        }
    ]
    booksRouter.get('/',function(req,res){
    res.render('books',
    {
        nav,
        title:'Libraryapp' ,books
    });
    });
    booksRouter.get('/:i',function(req,res){
    const id=req.params.i;
    res.render('book',{
        nav,
        title:'Libraryapp',
        book :books[id]
    
    });
    });
   
    return booksRouter;

}

module.exports=router;