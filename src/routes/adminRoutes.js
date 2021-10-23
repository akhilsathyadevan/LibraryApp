const express=require("express");
const adminRouter=express.Router();
const Bookdata=require('../model/bookdata');
const Authordata=require('../model/authordata');
var multer=require('multer');
var storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public/images');
    },
    filename: function(req,file,cb){
       cb(null,file.fieldname + '-'+Date.now() + '_' +file.originalname); 
    },
});
var upload = multer({storage:storage})

function router(adminnav){
    adminRouter.get('/login',function(req,res){
        res.render('login',{
            adminnav,
            title:'Libraryapp'

        });

    });
    adminRouter.get('/books',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('books',
            {
             adminnav,
             title:'Libraryapp' ,books
           });
        });

        });
    
    adminRouter.get('/books/:id',function(req,res){
      const id=req.params.id;
      Bookdata.findOne({_id:id})
      .then(function(book){
        res.render('book',{
            adminnav,
            title:'Libraryapp',
            book
        
        });
        });

    });
    adminRouter.get('/books/delete/:id',function(req,res){
        const id=req.params.id;
        console.log(id);
        Bookdata.findByIdAndRemove(id)
        .then(function(){
            res.redirect('/admin/books')
        });

    });
    // adminRouter.get('/books/updatebook/:id',function(req,res){
    //      const id=req.params.id
    //      Bookdata.findOne({_id:id});
    //      .then(function(books){
    //          res.render('updatebook',
    //          {
    //           adminnav,
    //           title:'Libraryapp' ,books
    //         });
    //     });
    // });
    adminRouter.get('/books/updatebook/:id',function(req,res){
        const id=req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
          res.render('updatebook',{
              adminnav,
              title:'Libraryapp',
              book
          
          });
          });
  
      });
  
    
    adminRouter.post('/books/updatebook/add/:id',upload.single('image'),function(req,res){
        const id= req.params.id;
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.file.filename
            
        }
        Bookdata.findByIdAndUpdate({'_id':id},item)
            .then(function(){
                res.redirect('/admin/books')
            })
    })

    adminRouter.get('/addbook',function(req,res){
        res.render('addbook',
        {
         adminnav,
         title:'Libraryapp' 
       });
    });
    adminRouter.post('/addbook/add',upload.single("image"),function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.file.filename
        }
        var book=Bookdata(item);
        book.save();
        res.redirect('/admin/books');

    });
    adminRouter.get('/addauthor',function(req,res){
        res.render('addauthor',
        {
         adminnav,
         title:'Libraryapp' 
       });
    });
    adminRouter.post('/addauthor/add',upload.single("image"),function(req,res){
        var authItem={
            name:req.body.name,
            writings:req.body.writings,
            image:req.file.filename
        }
        var auth=Authordata(authItem);
        auth.save();
        res.redirect('/admin/authors');

    });
    adminRouter.get('/authors',function(req,res){
        Authordata.find()
        .then(function(author){
            res.render('authors',
            {
             adminnav,
             title:'Libraryapp' ,author
           });
           });

        });
    adminRouter.get('/authors/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(auth){
            console.log(auth);
            res.render('author',
            {
             adminnav,
             title:'Libraryapp',
             auth
              
            });
        });
      
    });    
    adminRouter.get('/authors/delete/:id',function(req,res){
        const id=req.params.id;
        console.log(id);
        Authordata.findByIdAndRemove(id)
        .then(function(){
            res.redirect('/admin/authors')
        })

    })
    adminRouter.get('/authors/updateauthor/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(author){
          res.render('updateauthor',{
              adminnav,
              title:'Libraryapp',
              author
          
          });
          });
  
      });

      adminRouter.post('/authors/updateauthor/add/:id',upload.single('image'),function(req,res){
        const id= req.params.id;
        var item={
            name:req.body.name,
            writings:req.body.writings,
            image:req.file.filename   
        }
        Authordata.findByIdAndUpdate({'_id':id},item)
            .then(function(){
                res.redirect('/admin/authors')
        });
    });

    return adminRouter;

}

module.exports=router;