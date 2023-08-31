const SupportType = require("../models/supportTypeModel"); 

// POST Create SupportType
exports.createSupportType = async (req, res) => {
  if ( !req.body.userId && !req.body.supportType ) {
    res.status(400).send({ message: "This is a required field!" });
    return;
  }

  const newSupportType = new SupportType({
    userId: req.body.userId,
    supportType: req.body.supportType,
   description:req.body.description,
    createdAt: Date.now(),
    updatedAt: Date.now()
  });

  try {
    const savedSupportType = await newSupportType.save();
    res.status(201).json(savedSupportType);
  } catch (error) {
    console.error("Error creating Support type:", error);
    res.status(500).json({ error: "Failed to create Support type" });
  }
};

// GET All SupportTypes
exports.getSupportTypes = async (req, res) => {
  try {
    const SupportTypes = await SupportType.find();
    res.json(SupportTypes);
  } catch (error) {
    console.error("Error fetching Support types:", error);
    res.status(500).send("Internal Server Error");
  }
};


//get SupportType by id

exports.foundSupportType = async (req, res) => {
    const userId= req.params.userId;
    try {
        const foundtype= await SupportType.find({userId});
        if (!foundtype) {
            res.send("No Support Type found");
        } else {
            res.json(foundtype);
        }
    } catch (error) {
        console.error("Error fetching Support Type:", error);
        res.status(500).send("Internal Server Error");
    }
};

// PUT Update SupportType by ID
exports.updateSupportType = async (req, res) => {
  const supportTypeId = req.params.supportTypeId;

  try {
    const updatedData = req.body;
    const updatedSupportType = await SupportType.findByIdAndUpdate(
      supportTypeId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedSupportType) {
      res.send("No Support type found");
    } else {
      res.send(updatedSupportType);
    }
  } catch (err) {
    console.error("Error updating Support type:", err);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE SupportType by ID
exports.deleteSupportType = async (req, res) => {
  const supportTypeId = req.params.supportTypeId;

  try {
    const deletedSupportType = await SupportType.findByIdAndDelete(supportTypeId);

    if (!deletedSupportType) {
      res.send("No Support type found");
    } else {
      res.send(deletedSupportType);
    }
  } catch (err) {
    console.error("Error deleting Support type:", err);
    res.status(500).send("Internal Server Error");
  }
};
