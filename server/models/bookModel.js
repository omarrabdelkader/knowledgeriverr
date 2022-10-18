const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  author: {
    type: String,
    required: [true, "Please add an name"],
  },
  price: {
    type: String,
    required: [true, "Please add a price"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
  },
  img: {
    type: String,
    required: [true, "Please add a type"],
  },
});

module.exports = mongoose.model("Book", bookSchema);
