const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: false,
  },
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "category",
  },
  authorId: {
    type: mongoose.Schema.ObjectId,
    ref: "author",
  },
});

module.exports = mongoose.model("Book", bookSchema);
