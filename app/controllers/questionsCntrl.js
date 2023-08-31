
const Questions = require('../models/questionsModel');


  // Create and Save a new question
  exports.createQuestion = async (req, res) => {
      if (!req.body.questionData || !req.body.questionData.question) {
          res.status(400).send({ message: "Question content can not be empty!" });
          return;
      }
  
      const newQuestion = new Questions({
          questionData: {
              question: req.body.questionData.question,
              choices: req.body.questionData.choices || [],
              status: req.body.questionData.status || "create",
              createdBy: req.body.questionData.createdBy || "vendor", // Set the createdBy value as needed
              updatedBy: req.body.questionData.updatedBy || "vendor" // Set the updatedBy value as needed
             
          }
      });
  
      try {
          const savedQuestion = await newQuestion.save();
          res.status(201).json({ message: "Question created successfully!", question: savedQuestion });
      } catch (error) {
          res.status(500).json({ error: "Failed to create Question" });
      }
  };
  


//FETCH GET  QUESTIONS based on id

  exports.getQuestion = async (req, res) => {
    const questionId = req.params.id;
    try {
      const foundQuestions  = await Questions.findById(questionId);
      if (!foundQuestions) {
        res.send("No questions found");
      } else {
        res.json(foundQuestions);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      res.status(500).send("Internal Server Error");
    }
  };

//FIND TOTAL QUESTIONCount

exports.findTotalQuestionCount = async (req, res) => {
  try {
    const totalQuestionCount = await Questions.countDocuments();
    res.json({ totalQuestionCount });
  } catch (error) {
    console.error('Error fetching question count:', error);
    res.status(500).send('Internal Server Error');
  }
};



//PUT UPDATE


  exports.putQuestion = async (req, res) => {

  const questionId =  req.params.id;
 const updatedData = req.body;
      
  // find document by id and update
  try {
    const updatedQuestions = await Questions.findByIdAndUpdate(questionId,updatedData,{
    new: true, 
    runValidators: true, // Run model validators on the updated data
    });
    if (!updatedQuestions) {
      res.send("Nothing found");
    } else {
      res.send(updatedQuestions);
    }
  } catch (err) {
    console.error("Error updating document:", err);
    res.status(500).send("Internal Server Error");
  }
};



// DELETE
exports.deleteQuestion = async (req, res) => {
    const questionId = req.params.id;

    try {
        const deletedQuestion = await Questions.findByIdAndDelete(questionId);

        if (!deletedQuestion) {
            res.status(404).json({ message: "Question not found" });
        } else {
            res.status(200).json({ message: "Question deleted successfully", question: deletedQuestion });
        }
    } catch (err) {
        console.error("Error deleting document:", err);
        res.status(500).json("Internal Server Error");
    }
};



exports.getQuestionWithSetup = async(req,res)=>{

  try{
    const questionWithSetup = await Questions.find().populate('questionData.qsetId', '_id')

if(!questionWithSetup || questionWithSetup.length === 0){

  res.send("No question found");

}else{
res.json(questionWithSetup)
}
  }
  catch(error){
    console.error("Error in fetching questions wth Setup document:", error);
    res.status(500).send("Internal Server Error");
  }
};



//GET ALL question LIST ONLY

exports.getAllQuestion= async (req, res ) => {
  try {
      const allQuestion = await Questions.find();
      if (!allQuestion || allQuestion.length === 0) {
          res.send("No questions found");
      } else {
          const questionNames = allQuestion.map(question => question. questionData.question);
          res.json(questionNames);
      }
  } catch (error) {
      console.error("Error in fetching total question list:", error);
      res.status(500).send("Internal Server Error");
  }
};








 