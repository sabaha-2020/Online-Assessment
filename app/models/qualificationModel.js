const mongoose = require("mongoose");

const QualificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  fieldOfStudy: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  completionYear: {
    type: Number,
    required: true,
  },
  status: {
    type :String,
    default:"create"
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

const Qualification = mongoose.model("Qualification", QualificationSchema);

module.exports = Qualification;
