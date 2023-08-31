const mongoose = require("mongoose");

const EnquirySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    unique:true
  },
  enquiryType: {
    type: String,
    required: true,
  },

  /*status: {
    type: String,
    //enum: ["pending", "resolved"],
    default: "pending",
  },*/
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const EnquiryType = mongoose.model("EnquiryType", EnquirySchema);

module.exports = EnquiryType;

