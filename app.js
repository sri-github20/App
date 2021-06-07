const express=require('express')
const app=express()
const mongoose = require('mongoose')
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://user:user123@cluster0.o6hgh.mongodb.net/userDB',{ useNewUrlParser: true },{ useUnifiedTopology: true })

const userSchema={
    name:String,
    email:String
}
const User=mongoose.model("User",userSchema)
app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html")
})


app.post("/",function(req,res){
    let newUser=new User({
        name:req.body.name,
        email:req.body.email
    })
    newUser.save()
    res.send("Submitted successfully")
})
app.listen(3000,function(){
    console.log("Server is running on 3000")
})