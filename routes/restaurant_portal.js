var express = require('express')
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
var ObjectId = require('mongoose').Types.ObjectId; 
let jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
let middleware = require('./jwtverification');
var router = express.Router()
mongoose.connect('mongodb://localhost:27017/foodoholics', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;


router.post('/menu', middleware.checkToken, function(req, res){
    var id = req.body.id
    console.log(id)

    db.collection('restaurant_data').update({_id: ObjectId(id)},
    {
        
        $push: {menu:{
            name: req.body.name,
            cost: req.body.cost,
            description: req.body.description,
            image: req.body.image
        }}
    }, function(err, data){
        if (err){
                console.log("Fail")
                res.send("Fail")
           
            return;
        }
        else{
                console.log("Success")
                res.send("Success")
           
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

router.post('/restaurant_details/:id',   function(req, res){
    var id = req.params.id
    console.log(id)

    var data_update = {
        $set: {
            name: req.body.name,
            location: req.body.location,
            food_category: req.body.food_category,
            // res_image: req.body.res_image,
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


router.post('/display_details', function(req, res){
    var id = req.body.id
    console.log(id)
    db.collection('restaurant_data'). find({_id: ObjectId(id)}, {projection:{restaurant_details:1}} ).toArray(function(err, result) {
        if (err){
            console.log("Fail")
            res.json({
                message: "Failed"
            })
            return;
        }
        else{
            console.log("Success")
            console.log(result)
        
            res.json({
                message: "Success"
            })
            return;
        }
    })
});
module.exports = router
