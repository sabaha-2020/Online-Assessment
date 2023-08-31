const mongoose = require("mongoose");

const questionCategorySchema = new mongoose.Schema({
  qstnCategory: {
    name: {
      type: String,
      required: true,
    },
    descp: String,
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

const questionCategory = mongoose.model("questionCategory", questionCategorySchema);

module.exports = questionCategory;
