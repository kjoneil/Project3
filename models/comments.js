

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comments: { type: String, required: true },
  // ratings: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Comments = mongoose.model("Module", commentSchema);

module.exports = Comments;