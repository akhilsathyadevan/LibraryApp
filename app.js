const express=require("express");
const session=require('express-session');

const app=new express();
const port=process.env.PORT || 5000;
const usernav=[
    {
        link:'/books', name:'books'
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/login',name:'logout'
    }
    
];

const adminnav=[
    
    {
        link:'/admin/books', name:'books'
    },
    {
        link:'/admin/authors',name:'authors'
    },
    {
        link:'/admin/addbook',name:'add book'
    },
    {
        link:'/admin/addauthor',name:'add author'
    },
    {
        link:'/admin/login',name:'logout'
    }
];
const adminRouter=require('./src/routes/adminRoutes')(adminnav)
const userRouter=require('./src/routes/userRoutes')(usernav)
// const authorRouter=require('./src/routes/authRoutes')(nav)
// const addBookRouter=require('./src/routes/addBookRouter')(nav)//
// const addAuthRoutes=require('./src/routes/addAuthRoutes')(nav)
// const signupRoutes=require('./src/routes/signupRouter')(nav)
// const loginRoutes=require('./src/routes/loginRoutes')(nav)
app.use(session({secret:"key",resave:false,saveUninitialized:true,cookie:{maxAge:1000000}}))
app.use(express.urlencoded({extended :true}))
app.use(express.static("./public"));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/admin',adminRouter);
app.use('/',userRouter);
// app.use('/authors',authorRouter);
// app.use('/addbook',adminRouter);
// app.use('/addauthor',addAuthRoutes);
// app.use('/signup',signupRoutes);
// app.use('/login',loginRoutes);
// app.get("/",function(req,res){
//     res.render('index',
    
//     {
//         nav,
//         title:'Libraryapp'
//     });
// });



app.listen(port,()=>{console.log('server at '+port)});