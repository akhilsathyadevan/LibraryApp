// const express=require("express");
// const booksRouter=express.Router();
// const Bookdata=require('../model/bookdata');
// function router(nav){
//     // var books=[
//     //     {
//     //         title:"Tom and Jerry",
//     //         author:"Joseph Babera",
//     //         gener:"cartoon",
//     //         img:"tom.jpg"
//     //     },
//     //     {
//     //         title:"Harry Poter",
//     //         author:"J.K Rowling",
//     //         gener:"Fantay",
//     //         img:"harry.jpg"
//     //     },
//     //     {
//     //         title:"Pathummayude Aadu",
//     //         author:"Basheer",
//     //         gener:"Drama",
//     //         img:"basheer.jpg"
//     //     }
//     // ]
//     booksRouter.get('/',function(req,res){
//         Bookdata.find()
//         .then(function(books){
//             res.render('books',
//             {
//              nav,
//              title:'Libraryapp' ,books
//            });
//         });

//         })
    
//     booksRouter.get('/:id',function(req,res){
//     const id=req.params.id;
//     Bookdata.findOne({_id:id})
//     .then(function(book){
//         res.render('book',{
//             nav,
//             title:'Libraryapp',
//             book
        
//         });
//         });

//     });
    
   
//     return booksRouter;

// }

// module.exports=router;