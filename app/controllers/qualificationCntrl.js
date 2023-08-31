const Qualification = require("../models/qualificationModel");

exports.createQualification = async (req, res) => {
  if (!req.body.userId) {
    res.status(400).send({ message: "userId is a required field!" });
    return;
  }

  const newQualification = new Qualification({
    userId: req.body.userId,
    qualification: req.body.qualification,
    fieldOfStudy: req.body.fieldOfStudy,
    institute: req.body.institute,
  
    completionYear: req.body.completionYear,
    status: req.body.status || "create"
  });

  try {
    const savedQualification = await newQualification.save();
    res.status(201).json(savedQualification);
  } catch (error) {
    console.error("Error creating qualification:", error); // Log the error
    res.status(500).json({ error: "Failed to create qualification" });
  }
};


// GET Qualifications by User ID
exports.getQualifications= async (req, res) => {
  const userId = req.params.userId;

  try {
    const qualifications = await Qualification.find({ userId });
    res.json(qualifications);
  } catch (error) {
    console.error("Error fetching qualifications:", error);
    res.status(500).send("Internal Server Error");
  }
};

// PUT Update Qualification by ID
exports.updateQualification = async (req, res) => {
  const qualificationId = req.params.qualificationId;

  try {
    const updatedData = req.body;
    const updatedQualification = await Qualification.findByIdAndUpdate(
      qualificationId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedQualification) {
      res.send("No qualification found");
    } else {
      res.send(updatedQualification);
    }
  } catch (err) {
    console.error("Error updating qualification:", err);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE Qualification by ID
exports.deleteQualification = async (req, res) => {
  const qualificationId = req.params.qualificationId;

  try {
    const deletedQualification = await Qualification.findByIdAndDelete(
      qualificationId
    );

    if (!deletedQualification) {
      res.send("No qualification found");
    } else {
      res.send(deletedQualification);
    }
  } catch (err) {
    console.error("Error deleting qualification:", err);
    res.status(500).send("Internal Server Error");
  }
};

