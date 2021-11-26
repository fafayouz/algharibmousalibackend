const mongoose = require("mongoose");

const PostFatwa = mongoose.Schema({
  name: String,
  article: String,
  title: String,
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("PostFatwa", PostFatwa);