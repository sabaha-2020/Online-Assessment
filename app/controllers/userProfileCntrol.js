

const userProfile1 = require('../models/userProfileModels');
const user = require('../models/userModel');




exports.createUserProfile = async (req, res) => {
    if (!req.body.userId) {
      res.status(400).send({ message: "userId is a required field!" });
      return;
    }
  
    const newUserProfile = new userProfile1({
      userId: req.body.userId,
      profileImage: req.body.profileImage,
   
      email: req.body. email,
      org_name: req.body.org_name,
      org_license_no: req.body.org_license_no,
      org_id: req.body.org_id,
      interest:req.body.interest,
      userProfile:req.body.interest,
      occupation:req.body.occupation,
      status: req.body.status || "create",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  
    try {
      const savedProfile = await newUserProfile.save();
      res.status(201).json(savedProfile);
    } catch (error) {
      console.error("Error creating userProfile:", error);
      res.status(500).json({ error: "Failed to create userProfile" });
    }
  };

  


exports.getprofileByUserId = async (req, res) => {
    const userId = req.params.userId;
    try {
      const foundProfile = await userProfile1.find({ userId });
      res.json(foundProfile);
    } catch (error) {
      console.error("Error fetching userProfile:", error);
      res.status(500).send("Internal Server Error");
    }
  };




// PUT Update userProfile by ID
exports.updateUserProfile = async (req, res) => {
    const userProfileId = req.params.userProfileId;
  
    try {
      const updatedData = req.body;
      const updatedProfile = await userProfile1.findByIdAndUpdate( userProfileId, updatedData,
        {
          new: true,
          runValidators: true,
        }
      );
      if (!updatedProfile) {
        res.send("No userProfile found");
      } else {
        res.send(updatedProfile);
      }
    } catch (err) {
      console.error("Error updating userProfile:", err);
      res.status(500).send("Internal Server Error");
    }
  };
  
// DELETE userProfile by ID
exports.deleteUserProfile = async (req, res) => {
    const userProfileId = req.params.userProfileId;
  
    try {
      const deleteduserProfile = await userProfile1.findByIdAndDelete(
        userProfileId
      );
  
      if (!deleteduserProfile) {
        res.send("No userProfile found");
      } else {
        res.send(deleteduserProfile);
      }
    } catch (err) {
      console.error("Error deleting userProfile:", err);
      res.status(500).send("Internal Server Error");
    }
  };