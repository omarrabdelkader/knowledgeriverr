const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add your name"],
  },
  email: {
    type: String,
    required: [true, "Please add your email"],
  },
  message: {
    type: String,
    required: [true, "Please add your password"],
  },
});

module.exports = mongoose.model("Message", messageSchema);
