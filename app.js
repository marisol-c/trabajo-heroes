const express = require('express');
const app = express();
const port = 3030;
const path = require("path");

app.use(express.static('public'));

app.get('/home',(req,res)=>{res,sendFile(path.join(__dirname,'/views/index.html'))})
app.get('/babbage',(req,res)=> {res.sendFile(path.join(__dirname,'/views/babbage.html'))});
app.get('/berners-lee',(req,res)=>{res.sendFile(path.join(__dirname,'/views/berners-lee.html'))});
app.get('/clarke',(req,res)=>{res,sendFile(path.join(__dirname,'/views/clarke.html'))});
app.get('/hamiton',(req,res)=>{res,sendFile(path.join(__dirname,'/views/hamiton.html'))});
app.get('/hopper',(req,res)=>{res,sendFile(path.join(__dirname,'/views/hopper.html'))});
app.get('/lovelace',(req,res)=>{res,sendFile(path.join(__dirname,'/views/lovelace.html'))});
app.get('/turin-',(req,res)=>{res,sendFile(path.join(__dirname,'/views,turin-.html'))});


app.get('/',(req,res)=>{res.send('hola')});


app.listen(3030,()=>console.log("servidor corriendo en el puerto 3030"));