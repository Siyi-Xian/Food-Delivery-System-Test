const express = require('express');
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const Bcrypt = require("bcryptjs");

const app = express();




app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extend: true }));

Mongoose.connect("mongodb://localhost/foodoholic");


const UserSchema = new Mongoose.Schema({
  username: String,
  password: String
});

UserSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});



UserSchema.methods.comparePassword = function(plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

const UserModel = new Mongoose.model("user", UserSchema);

app.post("/register", async (request, response) => {
  try {
    
      var user = new UserModel(request.body);
      var result = await user.save();
      response.send(result);
  } catch (error) {
      response.status(500).send(error);
  }
});
app.post("/login", async (request, response) => {
  try {
    var user = await UserModel.findOne({ username: request.body.username }).exec();
    if(!user) {
        return response.status(400).send({ message: "The username does not exist" });
    }
    user.comparePassword(request.body.password, (error, match) => {
        if(!match) {
            return response.status(400).send({ message: "The password is invalid" });
        }
    });
    response.send({ message: "The username and password combination is correct!" });
} catch (error) {
    response.status(500).send(error);
}
});

app.get("/dump", async (request, response) => {
    try {
        var result = await UserModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(8080, () => {
    console.log("Listening at :8080...");
});