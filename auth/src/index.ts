import express from "express";
import {json } from "body-parser";

const app = express(); 
app.use(json());


app.get("/users/crtuser",(req,res)=>{
  res.send({
     "type": "Welcome",
     "message" : "Hello George!",
  });
})
app.get("/users/:id",(req,res)=>{
  if(req.params.id==="1"){
    res.send({
      "type": "Gretting",
      "message" : "Hi there!",
   })
  }
  else res.send({
    "type": "Leaving",
    "message" : "Bye there!",
 })
})

app.listen(3500,()=>{
  console.log("Listening on port 3500")
})