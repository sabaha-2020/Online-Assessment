const mongoose = require("mongoose");

const SupportSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique:true
  },

  supportType: {
    type: String,
    required: true,
    
  },
  description: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const SupportType = mongoose.model("SupportType", SupportSchema);

module.exports = SupportType;

