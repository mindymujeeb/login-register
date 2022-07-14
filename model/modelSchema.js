require("../controller/dataBaseConnection/databaseUserDetailsConnect");
const mongoose = require("mongoose");
const validator = require("validator");


const DataSchema = new mongoose.Schema({
  firstname:{
    type:String,
    minlength:1,
    maxlength:10,
    required:true
  },
  lastname:{
    type:String,
    minlength:1,
    maxlength:10,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email");
      }
    }
  },
  password:{
    type:String,
    minlength:8,
    maxlength:10,
    required:true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("Invalid Password");        
      }
    }
  },
  confirmPassword:{
    type:String,
    minlength:8,
    maxlength:10,
    required:true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("use strong password");        
      }
    }
  }
});

const DataModel = new mongoose.model('datas',DataSchema);
module.exports = DataModel;