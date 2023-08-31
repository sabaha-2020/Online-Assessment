const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique:true
  },
  enquiryMode: {
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

const EnquiryMode = mongoose.model("EnquiryMode", EnquirySchema);

module.exports = EnquiryMode;
