const Occupation = require('../models/occupationModel');

//POST



exports.createOccupation = async (req, res) => {
  if (!req.body.userId) {
    res.status(400).send({ message: "userId is a required field!" });
    return;
  }

  const newOccupation = new Occupation({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || "create"
    
  });

  try {
    const savedOccupation = await newOccupation.save();
    res.status(201).json(savedOccupation);
  } catch (error) {
    console.error("Error creating qualification:", error); 
    res.status(500).json({ error: "Failed to create qualification" });
  }
};


exports.getOccupationsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const foundOccupations = await Occupation.find({ userId });
    res.json(foundOccupations);
  } catch (error) {
    console.error("Error fetching occupations:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.putOccupation = async (req, res) => {
  const occupationId = req.params.occupationId;
  const updatedData = req.body;

  try {
    const updatedOccupation = await Occupation.findByIdAndUpdate(
      occupationId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedOccupation) {
      res.send("No occupation found");
    } else {
      res.json(updatedOccupation);
    }
  } catch (err) {
    console.error("Error updating occupation:", err);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteOccupation = async (req, res) => {
  const occupationId = req.params.occupationId;

  try {
    const deletedOccupation = await Occupation.findByIdAndDelete(
      occupationId
    );

    if (!deletedOccupation) {
      res.send("No occupation found");
    } else {
      res.json(deletedOccupation);
    }
  } catch (err) {
    console.error("Error deleting occupation:", err);
    res.status(500).send("Internal Server Error");
  }
};
