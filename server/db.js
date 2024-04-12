const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

mongoose.connect(process.env.MONGO_STR);

const userSchema = mongoose.Schema({
  googleId: { type: String },
  name: { type: String },
  email: { type: String },
  password: { type: String },
  karmaPoints: { type: Number, default: 0 },
  profileImage: {
    data: Buffer,
    contentType: String,
  },
  postId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

const postSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  Images: 
    {
      data: Buffer,
      contentType: String,
    },
  comments: [{ type: String }],
  likes: { type: Number, default: 0 },
});

const locationSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
});

const Location = mongoose.model("Location", locationSchema);
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = { User, Post, Location };
