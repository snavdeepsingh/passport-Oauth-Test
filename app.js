var express = require("express");
var authRoutes = require("./routes/auth-routes.js");
var passportSetup = require("./config/passport-setup.js");
var mongoose = require("mongoose");
var keys = require("./config/keys.js");

var PORT = process.env.PORT || 3000;
var app = express();

// set up view engine
app.set("view engine", "ejs");

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, ()=> {
    console.log("connected to mongodb");
})

// set up routes
app.use("/auth",authRoutes);

app.get("/", function(req, res){
    res.render("home");
});



app.listen(PORT, function(){
    console.log("app listening on port "+ PORT);
});


