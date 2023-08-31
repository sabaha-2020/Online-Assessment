const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
 
   firstName:{
    type: String,
    required: true,
  },
   lastName:{
  type: String,
},
  org_id:[{
  type:String,


}],
  org_name:{
  type:String
},
  email: {
    type: String,
    required: true,
   
  },
  password: { 
    type: String,
    required: true },
  dob: {
    type: String,
    required: true,
  }, 
   gender: {
    type: String,
    required: true,
  },
  address:{
  addressLine1:{
  type:String
  },
  addressLine2:{
  type:String
  },
  location:{
  type:String
  },
  postalCode:{
  type:Number
  },
  },

  userType:{
type:String,
required:true,
enum:['admin', 'lic admin','vendor','user' ],
default:'user'

  },
  userRoles:{
type:String,
required:true,
enum:['admin', 'lic admin','vendor','user','accountant','operator','verifier' ],

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

const user = mongoose.model("user", UserSchema);

module.exports = user;

