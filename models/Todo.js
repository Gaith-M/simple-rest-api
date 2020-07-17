const mongoose = require("mongoose");

const todo_schema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todos", todo_schema);
