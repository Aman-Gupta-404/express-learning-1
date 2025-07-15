const mongoose = require("mongoose");

const bookScehma = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 3,
  },
  author: {
    type: String,
    require: true,
  },
});

const Books = mongoose.model("Books", bookScehma);

module.exports = Books;
