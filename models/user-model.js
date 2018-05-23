var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    googleId: String
});

var User = mongoose.model("User", userSchema);

module.exptorts = User;