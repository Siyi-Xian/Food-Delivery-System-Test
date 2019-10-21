const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');
var ObjectId = require('mongoose').Types.ObjectId; 
const Bcrypt = require("bcryptjs");
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


var authentication = require('./routes/authenticate')
var restaurant_portal = require('./routes/restaurant_portal')



var cors = require('cors')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.use(cookieParser());


app.use(cors())

app.use('/restaurant', restaurant_portal);
app.use('/authentication', authentication)












app.get('*', function(req, res){
    res.status(404).send("Page Not Found")
})

app.listen(3000, function(){
    console.log("Server listening at port 3000");
    console.log(this.address().address)
})