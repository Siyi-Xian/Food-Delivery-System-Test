var express = require('express')
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');
const multer = require('multer')
var fs = require('fs')
var router = express.Router()
mongoose.connect('mongodb://heroku_wr9z45km:4qlbddem2aer4k5djhcrp5ph3s@ds243717.mlab.com:43717/heroku_wr9z45km', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
const menu_image_storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, "menu_images")
    },
    filename: (req, file, callBack)=>{
        callBack(null, file.originalname)
    }
})

const restaurant_image_storage = multer.diskStorage({
    destination: (req, file, callBack)=>{
        callBack(null, "restaurant_images")
    },
    filename: (req, file, callBack)=>{
        callBack(null, req.body.id + ".png")
    }
})

var upload_menu = multer({storage: menu_image_storage})
var upload_restaurant = multer({storage: restaurant_image_storage})


router.get("/display_menu/:restaurant_id", middleware.checkToken, function(req, res){
    var restaurant_id = req.params.restaurant_id
    var projection = {
        projection: {
            menu: 1
        }   
    }
    db.collection('restaurant_data').findOne({_id: new ObjectId(restaurant_id)}, projection, function(err, data){
        if(err){
            console.log("error")
            res.json({
                message: "No items"
            })
        }
        else{
            res.json(data)
        }
    })
})
router.get('/restaurants_list', middleware.checkToken, function(req, res){
    // console.log(req)
    var projection = {
        projection: {
            _id: 1,
            name: 1,
            contact: 1,
            food_category: 1,
            location: 1,
            working_hours: 1,
            res_image: 1
            
        }
    }
    var query = {
        name: {
            $regex:req.query.restaurant_name
        },
        food_category: {
            $regex:req.query.food_category
        },
        location: {
            $regex:req.query.location
        }
    }
    console.log(query)
    db.collection('restaurant_data').find(query, projection).toArray(function(err, result){
        if (err){
            res.json({
                message: "Failed to load"
            })
        }
        else{

            res.json(result)
            
        }
    })
})

router.get("/restaurant_image/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    fs.readFile('restaurant_images/' + id + ".png", function(err, content){
        if(err){
            // res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.json({
                message: "Picture not found"
            }); 
            return
        }
        else {
            //specify the content type in the response will be an image
            // res.writeHead(200,{'Content-type':'image/jpg'});
            res.json(content);
            return
        }
    })
})


router.get("/menu_image", middleware.checkToken, function(req, res){
    var id = req.query.restaurant_id
    fs.readFile('menu_images/' + id + req.query.name + ".png", function(err, content){
        if(err){
            // res.writeHead(400, {'Content-type':'text/html'})
            console.log(err);
            res.json({
                message: "Picture not found"
            }); 
            return
        }
        else {
            //specify the content type in the response will be an image
            // res.writeHead(200,{'Content-type':'image/jpg'});
            res.json(content);
            return
        }
    })
})


router.post('/menu', upload_menu.single('image'), function(req, res){
    var id = req.body.id

    db.collection('restaurant_data').update({_id: ObjectId(id)},
    {
        
        $push: {menu:{
            name: req.body.name,
            cost: req.body.cost,
            description: req.body.description,
            image: id + req.body.name + ".png"
        }}
    }, function(err, data){
        if (err){
                console.log("Fail")
                res.json({
                    message: "Failed"
                })
           
            return;
        }
        else{
                console.log("Success")
                res.json({
                    message: "Success"
                })
           
            return;
        }
    })
   
});



router.delete('/delete', middleware.checkToken, function(req, res){
    db.collection('restaurant_data').updateMany({
        _id: ObjectId(req.body._id)
    },
    {
        $pull: {
            menu: {
                name: req.body.name
            }
        }
    }
    , function(err, data){
        if (err){
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            res.json({
                message: "Success"
            })
            return;
        }
    })
});

router.post('/restaurant_details', upload_restaurant.single('image'), function(req, res){
    var id = req.body.id
    var data_update = {
        $set: {
            name: req.body.name,
            location: req.body.location,
            food_category: req.body.food_category,
            res_image: id+'.png',
            contact:req.body.contact,
            working_hours:req.body.working_hours
        }
    }
    
    
    db.collection('restaurant_data').updateOne({_id: ObjectId(id)}, data_update, function(err, data){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
             console.log(data)
            res.json({
                message: "Success"
            })
            return;
        }
    })
    //res.send("done")
});

router.get("/order_history/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    db.collection("order").find({restaurant_id: id, status: "1"}).toArray(function(err, data){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            console.log(data)
            res.json(data)
            return;
        }
    })
})

router.post("/fullfillorder", middleware.checkToken, function(req, res){
    var id = req.body.id
    const new_vals = {
        $set: {
            status: "1"
        }
    }
    db.collection("order").findOneAndUpdate({_id: new ObjectId(id)}, new_vals, function(err, data){
        if(err){
            console.log(err);
            res.json({message: "Error"});
        }
        else{
            console.log(data);
            res.json({message:"success"});
        }
    })
})

router.get("/current_orders/:restaurant_id", middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    db.collection("order").find({restaurant_id: id, status: "In progress"}).toArray(function(err, data){
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            console.log(data)
            res.json(data)
            return;
        }
    })
})

router.get('/display_details/:restaurant_id', middleware.checkToken, function(req, res){
    var id = req.params.restaurant_id
    // console.log(id)
    var d = {
        projection:{
                name:1,
                location: 1,
                food_category: 1,
                res_image: 1,
                contact: 1,
                working_hours: 1 
            }
        }
    // db.collection('restaurant_data'). find({_id: ObjectId(id)}, d).toArray(function(err, result) {
    db.collection('restaurant_data'). findOne({_id: ObjectId(id)}, d, function(err, result) {
        if (err){
            console.log(err)
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            // console.log(result)
        
            res.json(result)
            return;
        }
    })
});
module.exports = router
