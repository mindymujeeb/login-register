const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({path:'./config.env'});
const port = process.env.PORT;

const routerDetails = require("./controller/RESTfulApis/RESTfulAPIs");
const homerouter = require("./controller/homeRouter");
const logrouter = require("./controller/loginRoutes");
const regrouter = require("./controller/registerRoutes");
const path = `${__dirname}/views/public`;

app.set("view engine","ejs");
app.use(express.json());
app.use(routerDetails);
app.use(homerouter);
app.use(logrouter);
app.use(regrouter);
app.use(express.static(path));

app.listen(port, () =>{
  console.log(`connected`);
})