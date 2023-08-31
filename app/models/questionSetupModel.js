const mongoose = require("mongoose");

const questionSetupSchema = new mongoose.Schema({
  qset: {
    catgId: { type: mongoose.Schema.Types.ObjectId, ref: "questionCategory",  required: true},
    subId: { type: mongoose.Schema.Types.ObjectId, ref: "subject", required: true },
    testid: { type: String, required: true },
    duration:Number,
    maxMark: Number,
    minMark: Number,
    perQstnMark: Number,
    status:{
    type:String,
    default:"create"
    }
  },
}); 

const questionSetup = mongoose.model("questionSetup", questionSetupSchema);

module.exports = questionSetup;
