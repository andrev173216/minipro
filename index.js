const mysql=require('mysql')
const express = require("express");
var bodyparser= require('body-parser');
var encoder = bodyparser.urlencoded();
const app = express();
var connection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rental"
});
connection.connect(function(err){
    if (err) throw err;
   else console.log("connected")
   // con.query("create database test",function(err,result){
      //  if(err) throw err;
        //console.log("database connected");
    
});
app.use(express.static('public'));
app.set('view engine','ejs');
 app.get('/sign-up',(req,res)=>{
    res.render("sign-up");
});
app.get('/',(req,res)=>{
    res.render("index");
});
app.get('/login',(req,res)=>{
    res.render("login");
});
app.get('/house',(req,res)=>{
    res.render("house");
});
app.listen(3100);