const EnquiryMode= require("../models/enquiryModeModel"); 

// POST Create EnquiryMode
exports.createEnquiryMode = async (req, res) => {
  if ( !req.body.userId && !req.body.enquiryMode) {
    res.status(400).send({ message: "This is a required field!" });
    return;
  }

  const newEnquiryMode = new EnquiryMode({
    userId: req.body.userId,
    enquiryMode: req.body.enquiryMode,
   
    createdAt: Date.now(),
    updatedAt: Date.now()
  });

  try {
    const savedEnquiryMode = await newEnquiryMode.save();
    res.status(201).json(savedEnquiryMode);
  } catch (error) {
    console.error("Error creating enquiry Mode:", error);
    res.status(500).json({ error: "Failed to create enquiry Mode" });
  }
};

// GET All EnquiryModes
exports.getEnquiryModes = async (req, res) => {
  try {
    const enquiryModes = await EnquiryMode.find();
    res.json(enquiryModes);
  } catch (error) {
    console.error("Error fetching enquiry Modes:", error);
    res.status(500).send("Internal Server Error");
  }
};


//get EnquiryMode by id

exports.foundEnquiryMode = async (req, res) => {
    const userId= req.params.userId;
    try {
        const foundMode= await EnquiryMode.find({userId});
        if (!foundMode) {
            res.send("No Enquiry Mode found");
        } else {
            res.json(foundMode);
        }
    } catch (error) {
        console.error("Error fetching enquiry Mode:", error);
        res.status(500).send("Internal Server Error");
    }
};

// PUT Update EnquiryMode by ID
exports.updateEnquiryMode = async (req, res) => {
  const enquiryModeId = req.params.enquiryModeId;

  try {
    const updatedData = req.body;
    const updatedEnquiryMode = await EnquiryMode.findByIdAndUpdate(
      enquiryModeId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEnquiryMode) {
      res.send("No enquiry Mode found");
    } else {
      res.send(updatedEnquiryMode);
    }
  } catch (err) {
    console.error("Error updating enquiry Mode:", err);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE EnquiryMode by ID
exports.deleteEnquiryMode = async (req, res) => {
  const enquiryModeId = req.params.enquiryModeId;

  try {
    const deletedEnquiryMode = await EnquiryMode.findByIdAndDelete(enquiryModeId);

    if (!deletedEnquiryMode) {
      res.send("No enquiry Mode found");
    } else {
      res.send(deletedEnquiryMode);
    }
  } catch (err) {
    console.error("Error deleting enquiry Mode:", err);
    res.status(500).send("Internal Server Error");
  }
};
