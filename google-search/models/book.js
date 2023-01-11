const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true },
  authors: { type: Array, required: true },
  description: String,
  image: { type: String },
  link: { type: String },
  title: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;