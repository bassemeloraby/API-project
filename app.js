const express = require('express');
// const res = require('express/lib/response');
const mongoose = require('mongoose');
//bassem add
const User = require('./models/user')
app = express();
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const router = require('./routes/index')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blogs',{
    useNewUrlParser:true,
    // useUnifiedTopolgy:true
})


app.use(express.json())
app.use(cookieParser('myblug'))
app.use(expressSession({
    secret: 'myblug',
    saveUninitialized: true,
    resave: true,
    cookie: {maxAge: 6000}
}))
// app.use(passport.initialized())
app.use(passport.initialize())
app.use(passport.session())
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use('/',router)

app.listen(3030,()=>{
    console.log('server is started at port: 3030')
});
