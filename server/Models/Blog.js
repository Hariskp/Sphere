const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  blogID: {
    type: String,
    require: true,
    unique: true,
  },
  author: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Blog", blogSchema);
