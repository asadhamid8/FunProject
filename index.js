const express= require('express')
const app= express()
const port=3000

app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
    
    res.sendFile(__dirname + '/landingpage.html')})

app.listen(port,function(){


    console.log('listening as on ')
})