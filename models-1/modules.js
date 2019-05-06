const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const modulesSchema = new Schema({
  Subject: { type: String, required: true },
  Score: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", modulesSchema);

module.exports = Modules;