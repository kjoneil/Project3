

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moduleSchema = new Schema({
  modName: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Module", moduleSchema);

module.exports = Module;