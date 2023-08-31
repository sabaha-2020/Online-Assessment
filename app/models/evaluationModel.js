const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  questionSetup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questionSetup",
    required: true,
  },
  submittedAt: {
    type: Date,
    default:Date.now,
    
  },
  answers: [
    {
      question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Questions",
        required: true,
      },
      userAnswer: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
      
      },
    },
  ],
  totalMarks: {
    type: Number,
    default: 0,
  },
  result: {
    type: String,
    default: "Pending",
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

const Evaluation = mongoose.model("Evaluation", EvaluationSchema);

module.exports = Evaluation;
