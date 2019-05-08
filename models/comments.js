const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;