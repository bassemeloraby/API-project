const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');

app = express();

app.get('/',(req,res)=>{
    res.json({message:"hello world"})
})

app.listen(3030,()=>{
    console.log('server is started at port: 3030')
});
