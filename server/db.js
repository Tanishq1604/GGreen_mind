const mongoose= require('mongoose');
const env=require("dotenv");
env.config();

mongoose.connect(process.env.MONGO_STR);

const userSchema=  mongoose.Schema({
    googleId:{type:String},
    name: { type : String},
    email:{type :String},
    password:{type:String}
});

var User = mongoose.model("User", userSchema);
module.exports = User;