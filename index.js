const express=require('express')
app=express()
app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/contact.html')
})

app.get('/ttt',(req,res)=>{
    res.sendFile(__dirname+'/ttt.html')
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