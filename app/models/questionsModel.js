const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema({
  questionData: {
    qsetId: { type: mongoose.Schema.Types.ObjectId, ref: "questionSetup" },
    question: { type: String, required: true },
    choices: [
      {
        descp: { type: String },
        crcrtAnsYN: { type: String },
      },
    ],
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
    createdBy: String,
    updatedBy: String,
  },
});

const Questions = mongoose.model("Questions", QuestionsSchema);

module.exports = Questions;
