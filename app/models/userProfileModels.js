const mongoose = require("mongoose");


const UserProfileSchema = new mongoose.Schema({
 
    userId:{
      type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true
},     
        

    profileImage: {
        type: String, 
      },

  
      email: {
        type: String,
        required: true,
       
      },
  org_name:{
  type:String
},
org_license_no:{
type:String
},

org_id:{
  type:String,
},

  interest: [{ 
    type: String,
   
 }],

  qualification: [{
    type: String,
    
  }], 
  occupation: [{
    type: String,
    
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


const userProfile1 = mongoose.model("userProfile1", UserProfileSchema);

module.exports = userProfile1;