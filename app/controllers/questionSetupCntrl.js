
const questionSetup = require('../models/questionSetupModel');
const questionCategory = require('../models/questionCategoryModel');
const mongoose = require('mongoose');



  exports.createSetup = async (req, res) => {
    if (!req.body.qset.catgId || !req.body.qset.subId || !req.body.qset.testid) {
        res.status(400).send({ message: "Required fields missing!" });
        return;
    }

    const newQuestionSetup = new questionSetup({
        qset: {
            catgId: req.body.qset.catgId,
            subId: req.body.qset.subId,
            testid: req.body.qset.testid,
            duration: req.body.qset.duration,
            maxMark: req.body.qset.maxMark,
            minMark: req.body.qset.minMark,
            perQstnMark: req.body.qset.perQstnMark,
            status: req.body.qset.status || "create"
        }
    });

    try {
        await newQuestionSetup.save();
        res.status(201).json(newQuestionSetup);
    } catch (error) {
        console.error("Error creating question setup:", error);
        res.status(500).json({ error: "Failed to create question setup" });
    }
};


  
//FETCH GET  SETUP QUESTION based on id

   exports.getSetup = async (req, res) => {
  const questionSetupId = req.params.id;
  try {
    const foundquestionSetup = await questionSetup.findById(questionSetupId);
    if (!foundquestionSetup) {
      res.send("No question SetUp found");
    } else {
      res.json(foundquestionSetup);
    }
  } catch (error) {
    console.error("Error fetching question SetUp:", error);
    res.status(500).send("Internal Server Error");
  }
};

//total QUESTION SETUP count

exports.findTotaSetupCount = async (req, res) => {
  try {
    const totalSetupCount = await questionSetup.countDocuments();
    res.json({ totalSetupCount });
  } catch (error) {
    console.error('Error fetching questionSetup count:', error);
    res.status(500).send('Internal Server Error');
  }
};


//PUT UPDATE


  exports.putSetup = async (req, res) => {

  const questionSetupId =  req.params.id;
 const updatedData = req.body;
      
  // find document by id and update
  try {
    const updatedSetup = await questionSetup.findByIdAndUpdate(questionSetupId,updatedData,{
    new: true, 
    runValidators: true, // Run model validators on the updated data
    });
    if (!updatedSetup) {
      res.send("Nothing found");
    } else {
      res.send(updatedSetup);
    }
  } catch (err) {
    console.error("Error updating document:", err);
    res.status(500).send("Internal Server Error");
  }
};


// DELETE
   exports.deleteSetup = async(req,res)=>{
  const questionSetupId = req.params.id;
  
  try {
    const deletedData = await questionSetup.findByIdAndDelete(questionSetupId);

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


//GET ALL QSTNSETUP LIST
exports.getqstnSetupList = async(req,res)=>{

  try{
    const SetupList = await questionSetup.find()

if(!SetupList){

  res.send("No subjects found");

}else{
res.json(SetupList)
}
  }
  catch(error){
    console.error("Error in fetching subject wth category document:", error);
    res.status(500).send("Internal Server Error");
  }
};





//GET QSTNSETUP BASED ON A PARTICULAR SUBJECT
exports.getSetupsWithSubject = async (req, res) => {
  const subjectId = req.params.subjectId; 

  try {
    const setupsWithSubjects = await questionSetup.find({ "qset.subId": subjectId});

    if (!setupsWithSubjects|| setupsWithSubjects.length === 0) {
      res.send("No qstnSetup found for this subject");
    } else {
      res.json(setupsWithSubjects);
    }
  } catch (error) {
    console.error("Error fetching qstnSetup with subject:", error);
    res.status(500).send("Internal Server Error");
  }
};


// COUNT OF a(1) subjects based on subject

exports.countSetupForSubject = async (req, res) => {
  const subjectId = req.params.subjectId; // Get the subject ID from the URL 
  
  try {
    const questionSetUpCount = await questionSetup.aggregate([
      {
        $match: {
          'qset.subId': mongoose.Types.ObjectId(subjectId) // Match the subject ID
        }
      },
      {
        $group: {
          _id: '$qset.testid', // Group by the testid of the setup
          mycount: { $sum: 1 } // Count setups in each testid
        }
      }
    ]);
  
    const result = {};
  
    for (const entry of questionSetUpCount) {
      const testId = entry._id;
      const count = entry.mycount;
      result[testId] = count;
    }
  
    res.json(result);
  } catch (error) {
    console.error('Error fetching question setup count:', error);
    res.status(500).send('Internal Server Error');
  }
};
