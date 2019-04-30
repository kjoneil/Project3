const mongoose = require("mongoose");
// import mongoose from 'moongoose';
const Schema = mongoose.Schema;

const membersSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Members = mongoose.model("Members", membersSchema);

module.exports = Members;