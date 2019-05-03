const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const members = new Schema({
  module: { type: String, required: true },
  score: { type: Number, required: true },
  Question: String,
  date: { type: Date, default: Date.now }
});

const Members = mongoose.model("Members", members);

module.exports = Members;