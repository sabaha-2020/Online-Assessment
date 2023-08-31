
const user = require('../models/userModel');


// POST


exports.postUser = async (req, res) => {
  if (!req.body.firstName&& !req.body.lastName&& !req.body. org_id && !req.body.email && !req.body.password&& !req.body.userType && !req.body. userRoles ) {
    res.status(400).send({ message: "Content can not be empty!" });
}
      const newUser = new user({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          org_id: req.body.org_id,
          org_name: req.body.org_name,
          email: req.body.email,
          password: req.body.password,
          dob: req.body.dob, 
          gender: req.body.gender,
          address: {
              addressLine1: req.body.address.addressLine1,
              addressLine2: req.body.address.addressLine2,
              location: req.body.location,
              postalCode: req.body.postalCode,
          },
          userType: req.body.userType,
          userRoles: req.body.userRoles,
          status: req.body.status || "create"
      });

      await newUser.save().then(data => {
       
        res.send({
           
            newUser:data
        });
    }).catch(err => {
        
        res.status(500).send({
            message: err.message || "Some error occurred while creating user"
        });
    });
};

//FETCH GET  BASED ON ID

    exports.getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const foundUser = await user.findById(userId);
    if (!foundUser) {
      res.send("No users found");
    } else {
      res.json(foundUser);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
};

//GET ORG_ID

exports.getOrgId = async (req,res) =>{
  const orgId =req.params.orgId;
 try {

  const foundUsersOrg = await user.find({ org_id:orgId});
  if(!foundUsersOrg || foundUsersOrg.length === 0){
    res.send("No users found for this org_id")
  }
  else{
    res.json(foundUsersOrg)
  }
  }
  catch(error){
    console.error("Error fetching users:", error);
    res.status(500).send("Internal Server Error");
  }
}
//get userType

exports.userTypeCount = async (req, res) => {
  try {
    const userTypeCounts = await user.aggregate([
      {
        $group: {
          _id: '$userType',
          userCount: { $sum: 1 }
        }
      }
    ]);

    const result = {};
    userTypeCounts.forEach((entry) => {
      result[entry._id] = entry.userCount;
    });

    res.json(result);
  } catch (error) {
    console.error('Error fetching user type counts:', error);
    res.status(500).send('Internal Server Error');
  }
};

//GET USER based ROLES 

exports.getUsersByRole = async (req, res) => {
  const requestedRole = req.params.role;
  try {
    const users = await user.find({ userRoles: requestedRole });
    if (users.length === 0) {
      res.send(`No users found with role: ${requestedRole}`);
    } else {
      res.json(users);
    }
  } catch (error) {
    console.error('Error fetching users by role:', error);
    res.status(500).send('Internal Server Error');
  }
};


// GET - Fetch users based on user type
exports.getUsersByType = async (req, res) => {
  const userType = req.params.userType; // Extract userType from request params

  try {
    const usersOfType = await user.find({ userType }); // Fetch users based on userType
    res.json(usersOfType);
  } catch (error) {
    console.error('Error fetching users by type:', error);
    res.status(500).send('Internal Server Error');
  }
};


//GET USERTYPE COUNT
exports.getUserTypeCount = async (req, res) => {
  try {
    const userTypeCounts = await user.aggregate([
      { $group: { _id: '$userType', count: { $sum: 1 } } },
      { $project: { userType: '$_id', count: 1, _id: 0 } }
    ]);

    res.json(userTypeCounts);
  } catch (error) {
    console.error("Error fetching user type counts:", error);
    res.status(500).send("Internal Server Error");
  }
};

//GET USERRoles COUNT
exports.getUserRolesCount = async (req, res) => {
  try {
    const userRolesCounts = await user.aggregate([
      { $group: { _id: '$userRoles', count: { $sum: 1 } } },
      { $project: { userRoles: '$_id', count: 1, _id: 0 } }
    ]);

    res.json(userRolesCounts);
  } catch (error) {
    console.error("Error fetching userRoles counts:", error);
    res.status(500).send("Internal Server Error");
  }
};

//PUT UPDATE


  exports.putUser = async (req, res) => {

  const userId =  req.params.id;
 const updatedData = req.body;
      
  // find document by id and update
  try {
    const updatedUsers = await user.findByIdAndUpdate(userId,updatedData,{
    new: true, 
    runValidators: true, // Run model validators on the updated data
    });
    if (!updatedUsers) {
      res.send("Nothing found");
    } else {
      res.send(updatedUsers);
    }
  } catch (err) {
    console.error("Error updating document:", err);
    res.status(500).send("Internal Server Error");
  }
};


// DELETE
   exports.deleteUser = async(req,res)=>{
  const userId = req.params.id;
  
  try {
    const deletedData = await user.findByIdAndDelete(userId);

    if (!deletedData) {
      res.send("Nothing found");
    } else {
      res.send(deletedData);
    }
  } catch (err) {
    console.error("Error deleting document:", err);
    res.status(500).send("Internal Server Error");
  }
};


// get users list 

exports.getUsersList = async(req,res)=>{

  try{
    const usersList = await user.find()

if(!usersList){

  res.send("No users found");

}else{
res.json(usersList)
}
  }
  catch(error){
    console.error("Error in fetching users list :", error);
    res.status(500).send("Internal Server Error");
  }
};


//GET ALL users LIST ONLY

exports.getAllUsers = async (req, res ) => {
  try {
      const allusers = await user.find();
      if (!allusers || allusers.length === 0) {
          res.status(404).send("No users found");
      } else {
          const usersNames = allusers.map(users => users.firstName);
          res.json(usersNames);
      }
  } catch (error) {
      console.error("Error in fetching users list document:", error);
      res.status(500).send("Internal Server Error");
  }
};


//GET FULL COUNT OF user

exports.findTotalUserCount = async (req, res) => {
  try {
    const UserCount = await user.countDocuments();
    res.json({UserCount });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).send('Internal Server Error');
  }
};

  