const mongoose = require('mongoose');

const OccupationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userProfile",
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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

const Occupation = mongoose.model("Occupation", OccupationSchema);

module.exports = Occupation;
