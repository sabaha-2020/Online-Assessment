const Interest = require('../models/interestModel');


exports.createInterest = async (req, res) => {
  if (!req.body.userId || !req.body.interest) {
      res.status(400).send({ message: "userId and interest are required fields!" });
      return;
  }

  const newInterest = new Interest({
    userId: req.body.userId,
    interest: req.body.interest,
    status: req.body.status || "create"
  });

  try {
      const savedInterest = await newInterest.save();
      res.status(201).json(savedInterest);
  } catch (error) {
      res.status(500).json({ error: "Failed to create interest" });
  }
};

////
exports.getInterestsByUserId = async (req, res) => {
  const userId = req.params.userId;
  try {
    const foundInterests = await Interest.find({ userId });
    res.json(foundInterests);
  } catch (error) {
    console.error("Error fetching interests:", error);
    res.status(500).send("Internal Server Error");
  }
};

exports.putInterest = async (req, res) => {
  const interestId = req.params.interestId;
  const updatedData = req.body;

  try {
    const updatedInterest = await Interest.findByIdAndUpdate(
      interestId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedInterest) {
      res.send("No interest found");
    } else {
      res.json(updatedInterest);
    }
  } catch (err) {
    console.error("Error updating interest:", err);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteInterest = async (req, res) => {
  const interestId = req.params.interestId;

  try {
    const deletedInterest = await Interest.findByIdAndDelete(
      interestId
    );

    if (!deletedInterest) {
      res.send("No interest found");
    } else {
      res.json(deletedInterest);
    }
  } catch (err) {
    console.error("Error deleting interest:", err);
    res.status(500).send("Internal Server Error");
  }
};


