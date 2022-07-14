const express = require("express");
const bodyparser = require("body-parser");
const regrouter = new express.Router();

const urlEncoderParser = bodyparser.urlencoded({extended:true});
const DataCollection = require("../model/modelSchema");

// register page HTML, CSS .ejs route
regrouter.get("/register",urlEncoderParser,(_,resp) => {
  resp.render("html/registerPage",{story:""});
});

// post data from HTML, CSS ejs
regrouter.post("/register",urlEncoderParser,async(req,resp) => {
  if(req.body.password !== req.body.confirmPassword){
    resp.render("html/registerPage",{story:"passwords are not matching"});
  }else{
    const isEmailExists = await DataCollection.find({email:req.body.email});
    if(isEmailExists[0] !== undefined){
      resp.render("html/login");
    }else{
    const data = await DataCollection(req.body);
      data.save().then(() => {
        resp.render("html/login",{story:"Registered now login"});
    }).catch((e) => {
      console.log("Data not stored database",e);
      });
    } 
  }
});

module.exports = regrouter;