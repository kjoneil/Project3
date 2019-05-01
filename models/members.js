const mongoose = require("mongoose");
// import mongoose from 'moongoose';
const Schema = mongoose.Schema;

const members = new Schema({
  module: { type: String, required: true },
  module_score: { type: String, required: true },
  Question: String,
  Answer:Boolean,
  age:{type:Number, min:5},
  date: { type: Date, default: Date.now }
});

const Members = mongoose.model("Members", members);

module.exports = Members;