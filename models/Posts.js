const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  article: String,
  images: [],
  created_at: { type: Date, required: true, default: Date.now }
});

module.exports = mongoose.model("PostSchema", PostSchema);
