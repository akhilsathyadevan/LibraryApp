const express=require("express");
// const addAuthRouter = require("./src/routes/addAuthRoutes");
const app=new express();
const port=process.env.PORT || 5000;

const nav=[
    {
        link:'/books', name:'books'
    },
    {
        link:'/authors',name:'authors'
    },
    {
        link:'/addbook',name:'add book'
    },
    {
        link:'/addauthor',name:'add author'
    },
    {
        link:'/signup',name:'signup'
    },
    {
        link:'/login',name:'login'
    }
];
const booksRouter=require('./src/routes/bookRoutes')(nav)
const authorRouter=require('./src/routes/authRoutes')(nav)
const addBookRouter=require('./src/routes/addBookRouter')(nav)
const addAuthRoutes=require('./src/routes/addAuthRoutes')(nav)
const signupRoutes=require('./src/routes/signupRouter')(nav)
const loginRoutes=require('./src/routes/loginRoutes')(nav)
app.use(express.static("./public"));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/addbook',addBookRouter);
app.use('/addauthor',addAuthRoutes);
app.use('/signup',signupRoutes);
app.use('/login',loginRoutes);
app.get("/",function(req,res){
    res.render('index',
    
    {
        nav,
        title:'Libraryapp'
    });
});



app.listen(port,()=>{console.log('server at '+port)});