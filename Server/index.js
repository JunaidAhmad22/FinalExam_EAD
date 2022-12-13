const mongoose = require('mongoose')
const express = require('express')
const ejs = require('ejs')
const Player = require('./Model/Players')
const playerCont = require('./Controller/PlayerController')

const app = express();
mongoose.connect('mongodb://localhost/testDB')
app.set('view engine', 'ejs')

app.listen(3000,()=>{
    console.log('Listening on Port 3000');
})

app.get('/home', function(req, res){
    res.render('home');
})
