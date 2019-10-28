const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Task = new Schema({
  name: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  },
  category: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  data_end: {
    type: String
  },
  priority: {
    type: String
  },
  started: {
    type: Boolean
  },
  start: {
    type: String
  },
  stop: {
    type: String
  },
  visible: {
    type: Boolean
  },
  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Task", Task);
