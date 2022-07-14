const express = require("express");
const logrouter = new express.Router();
const DataCollection = require("../model/modelSchema");
const bodyparser = require("body-parser");

// middlewares
const urlEncoderParser = bodyparser.urlencoded({extended:true});

// front-end page render
logrouter.get("/login",urlEncoderParser,(_,resp)=>{
  resp.render("html/login");
});

// post data from user to server route
logrouter.post("/login",urlEncoderParser,async(req,resp)=>{
  const data = await DataCollection.find({email : req.body.email});
  if(data[0] !== undefined){
    if(data[0].password === req.body.password){
      resp.render("html/userInfo",data[0]);
    }else{
      resp.send("Invalid Credentials");
    }
  }else{
    resp.render("html/404page");
  }
});

module.exports = logrouter;