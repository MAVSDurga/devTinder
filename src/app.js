const express=require("express");
const app=express();
app.use("/test",(req,res)=>{
    res.send("Hello World!!")
});
app.use("/run",(req,res)=>{
    res.send("Hello!!")
});
app.use("/from",(req,res)=>{
    res.send("Hello Aruna!")
});
app.listen(3000);