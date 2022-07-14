const express = require("express");
const router = new express.Router();
const DataCollection = require("../../model/modelSchema");

// RESTful APIs 
// 1- GET
router.get("/users",async(_,resp) => {
  const data = await DataCollection.find();
  resp.send(data);
});

// 2- POST
router.post("/users",async(req,resp) => {
  const data = await DataCollection(req.body);
  const savedData = await data.save();
  resp.send(savedData);
});

// 3- PUT
router.put("/users/:firstname",async(req,resp) => {
  const savedData = await DataCollection.updateOne(req.params,{$set:req.body});
  resp.send(savedData);
});

// 4- DELETE
router.delete("/users/:firstname",async(req,resp) => {
  const savedData = await DataCollection.deleteOne(req.params);
  resp.send(savedData);
})

module.exports = router;