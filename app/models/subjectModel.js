const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
subjects:{
    qstnCategory: { type: mongoose.Schema.Types.ObjectId, ref: "questionCategory", required: true},
    name: {
      type: String,
      required: true,
    },
    status: {
      type :String,
      default:"create"
    },
    descp: String,
    
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    createdBy: String,
    updatedBy: String,
}
});

const subject = mongoose.model("subject", subjectSchema);

module.exports = subject;
