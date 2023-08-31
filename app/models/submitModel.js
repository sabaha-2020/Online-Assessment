const mongoose =require('mongoose');

const SubmitSchema = new mongoose.Schema({

user:{
type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
},
questionSetup:{
type:mongoose.Schema.Types.ObjectId,
ref:"questionSetup",
required:true
},
answers:[
    {
question:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Question",
    required:true
},
answer:{
    type:String,
    required:true
},
},
],
submittedAt:{
    type:Date,
    default:Date.now
},
});

const Submit =  mongoose.model("submit",SubmitSchema);

module.exports = Submit;
