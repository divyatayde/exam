const { response } = require('express');
var express = require ('express')
var app=express();
app.get('/',(req,resp)=>{
    resp.send("title");

});
app.listen(8080);
console.log("server sarted at port 8080");