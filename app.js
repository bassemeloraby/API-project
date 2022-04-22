const express = require('express');
// const res = require('express/lib/response');
const mongoose = require('mongoose');

app = express();

const router = require('./routes/index')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/blogs',{
    useNewUrlParser:true
})

app.use(express.json())
app.use('/',router)

app.listen(3030,()=>{
    console.log('server is started at port: 3030')
});
