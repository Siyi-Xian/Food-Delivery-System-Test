const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var nodemailer = require('nodemailer');
var ObjectId = require('mongoose').Types.ObjectId; 
const Bcrypt = require("bcryptjs");
let jwt = require('jsonwebtoken');
var path = require('path')
var http = require('http')
const cookieParser = require('cookie-parser');


var authentication = require('./routes/authenticate')
var restaurant_portal = require('./routes/restaurant_portal')
var customer_portal = require('./routes/customer_portal')
var port = process.env.PORT || 8080

var cors = require('cors')

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 
    extended: true
}));
app.use(cookieParser());


app.use(cors())

app.use(express.static('dist/fooddeliverysystem'))
// app.use(express.static(__dirname + '/menu_images'));
app.use('/restaurant_images', express.static(__dirname + '/restaurant_images'));
app.use('/menu_images', express.static(__dirname + '/menu_images'))
// const server = 
app.use('/restaurant', restaurant_portal);
app.use('/authentication', authentication)
app.use('/customer', customer_portal)
app.get("/*", function(req, res){
    res.sendFile(path.join(__dirname+ '/dist/fooddeliverysystem/index.html'))
})
// app.get('*', function(req, res){
//     res.status(404).send("Page Not Found")
// })

app.listen(port, function(){
    console.log("Server listening at port " + port);
    console.log(this.address().address)
})