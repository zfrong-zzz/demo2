const express=require('express')
const home =express.Router();
home.get('/index',()=>{
    res.send('hhh')
});
module.exports=home