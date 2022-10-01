const mongoose = require("mongoose");

const FormsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    default: "Submitted",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("forms", FormsSchema);
