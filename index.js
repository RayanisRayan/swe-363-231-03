const express=require('express');
app=express()
router=require('./router')
app.use(express.static(__dirname));
app.use(router)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.use("/sumbited.html",function (req,res,next){
    console.log("Procces done")
    next();
})

app.get('/sumbitcode',(req,res)=>{
    res.sendFile(__dirname+'/sumbitCode.html')
})

app.get('/submited',(req,res)=>{
    res.sendFile(__dirname+'/submited.html')
})

app.get('/canvas',(req,res)=>{
    res.sendFile(__dirname+'/canvas.html')
})

app.get('/submited',(req,res)=>{
    res.sendFile(__dirname+'/submited.html')
})



app.listen(3000)