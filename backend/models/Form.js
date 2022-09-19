const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  Subject: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
  Progress: {
    type: String,
    default: "Submitted",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("form", FormSchema);
