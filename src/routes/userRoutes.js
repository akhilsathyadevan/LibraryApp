const express=require("express");
const bcrypt=require('bcrypt');
const userRouter=express.Router();
const Bookdata=require('../model/bookdata');
const Authordata=require('../model/authordata');
const Signupdata=require('../model/signupdata');
function router(usernav){
    userRouter.get('/',function(req,res){
        if(req.session.user){
            res.redirect('/books')

        }else{
            res.redirect('/login');
        }
        

    });
    userRouter.get('/login',function(req,res){
        res.render('userlogin',{
            usernav,
            title:'Libraryapp'

        });

    });
    
    userRouter.post('/login',function(req,res){
        let username=req.body.username;
        let password=req.body.password;
        console.log(req.body);
        Signupdata.findOne({'username':username},function(err,user){
            if(user){
                bcrypt.compare(password,user.password)
                .then((status)=>{
                    if(status){
                        console.log("success")
                        req.session.user=user;
                        console.log("logged in");
                        res.redirect("/")
                    }else{
                        res.json({failed:'wrong credentials'})
                    }
                })
            }else{
                res.json({failed:'wrong credentials'})
            }
        })

    });
    userRouter.get('/signup',function(req,res){
        res.render('usersignup',{
            usernav,
            title:'Libraryapp'

        });

    });
    userRouter.post('/signup/add',async function(req,res){
        var user={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
            phone:req.body.phone
        }
        user.password = await bcrypt.hash(user.password,10);
        console.log(user.password);
        var user=Signupdata(user);
        var signup=Signupdata(user);
        signup.save();
        res.redirect('/login');

    })

    userRouter.get('/books',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render('userbooks',
            {
             usernav,
             title:'Libraryapp' ,books
           });
        });

        });
    
    userRouter.get('/books/:id',function(req,res){
      const id=req.params.id;
      Bookdata.findOne({_id:id})
      .then(function(book){
        res.render('userbook',{
            usernav,
            title:'Libraryapp',
            book
        
        });
        });

    });

    userRouter.get('/addbook',function(req,res){
        res.render('addbook',
        {
         usernav,
         title:'Libraryapp' 
       });
    });
    userRouter.post('/add',function(req,res){
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
    userRouter.get('/authors',function(req,res){
        Authordata.find()
        .then(function(author){
            res.render('userauthors',
            {
             usernav,
             title:'Libraryapp' ,author
           });
           });

        });
    userRouter.get('/authors/:id',function(req,res){
        const id=req.params.id;
        Authordata.findOne({_id:id})
        .then(function(auth){
            res.render('userauthor',
            {
             usernav,
             title:'Libraryapp',
             auth
              
            });
        });
      
    }); 
    
    return userRouter;

}

module.exports=router;