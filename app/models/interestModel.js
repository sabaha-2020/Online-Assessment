const mongoose = require("mongoose");

const InterestSchema = new mongoose.Schema({
 
userId: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "userProfile",
  required: true,
  unique: true,
},
interest: [{
  type: String,
  required: true,
}],
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

const Interest = mongoose.model("Interest", InterestSchema);

module.exports = Interest;
