const express = require("express");
const {API_VERSION} = require("./constants")
const bodyParser=require("body-parser");
const cors=require("cors");
const app=express();
 //import routings
 //..

 //configure body parse
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Configure Static Folder
app.use(express.static("uploads"));

 // configure Header HTTP - CORS
app.use(cors());

 //configure routings
 //..


 module.exports=app;