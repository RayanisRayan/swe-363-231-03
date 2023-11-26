const express = require("express");
const router = express();

router.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})

router.get('/ttt',(req,res)=>{
    res.sendFile(__dirname+'/ttt.html')
})

module.exports=router