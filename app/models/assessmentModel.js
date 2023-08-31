const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({

  userId :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:true,
  },  
  testId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Evaluation",
    required:true,
  },
  totalScore:{
    type:Number,
    required:true,
  },
  status:{
    type:String,
    required:true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
  }
});

const assessment = mongoose.model("assessment",AssessmentSchema);
module.exports = assessment;



