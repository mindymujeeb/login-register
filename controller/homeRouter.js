const express = require("express");
const homerouter = express.Router();

// homepage 
homerouter.get("/", (_,resp) => {
  resp.render("html/homepage");
});

module.exports = homerouter;
