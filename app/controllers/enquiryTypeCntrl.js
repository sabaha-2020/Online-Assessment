const EnquiryType = require("../models/enquiryTypeModel"); 

// POST Create EnquiryType
exports.createEnquiryType = async (req, res) => {
  if ( !req.body.userId && !req.body.enquiryType ) {
    res.status(400).send({ message: "This is a required field!" });
    return;
  }

  const newEnquiryType = new EnquiryType({
    userId: req.body.userId,
    enquiryType: req.body.enquiryType,
   
    createdAt: Date.now(),
    updatedAt: Date.now()
  });

  try {
    const savedEnquiryType = await newEnquiryType.save();
    res.status(201).json(savedEnquiryType);
  } catch (error) {
    console.error("Error creating enquiry type:", error);
    res.status(500).json({ error: "Failed to create enquiry type" });
  }
};

// GET All EnquiryTypes
exports.getEnquiryTypes = async (req, res) => {
  try {
    const enquiryTypes = await EnquiryType.find();
    res.json(enquiryTypes);
  } catch (error) {
    console.error("Error fetching enquiry types:", error);
    res.status(500).send("Internal Server Error");
  }
};


//get EnquiryType by id

exports.foundEnquiryType = async (req, res) => {
    const userId= req.params.userId;
    try {
        const foundtype= await EnquiryType.find({userId});
        if (!foundtype) {
            res.send("No Enquiry Type found");
        } else {
            res.json(foundtype);
        }
    } catch (error) {
        console.error("Error fetching enquiry Type:", error);
        res.status(500).send("Internal Server Error");
    }
};

// PUT Update EnquiryType by ID
exports.updateEnquiryType = async (req, res) => {
  const enquiryTypeId = req.params.enquiryTypeId;

  try {
    const updatedData = req.body;
    const updatedEnquiryType = await EnquiryType.findByIdAndUpdate(
      enquiryTypeId,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedEnquiryType) {
      res.send("No enquiry type found");
    } else {
      res.send(updatedEnquiryType);
    }
  } catch (err) {
    console.error("Error updating enquiry type:", err);
    res.status(500).send("Internal Server Error");
  }
};

// DELETE EnquiryType by ID
exports.deleteEnquiryType = async (req, res) => {
  const enquiryTypeId = req.params.enquiryTypeId;

  try {
    const deletedEnquiryType = await EnquiryType.findByIdAndDelete(enquiryTypeId);

    if (!deletedEnquiryType) {
      res.send("No enquiry type found");
    } else {
      res.send(deletedEnquiryType);
    }
  } catch (err) {
    console.error("Error deleting enquiry type:", err);
    res.status(500).send("Internal Server Error");
  }
};


