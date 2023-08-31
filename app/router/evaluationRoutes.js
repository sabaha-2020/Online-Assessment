const express = require('express');
const router = express.Router();
const Evaluation = require('../models/evaluationModel.js');


//POST

router.post("/",async(req,res)=>{
    
    try{
      const newEvaluation = new Evaluation(req.body);
      await newEvaluation.save();
      res.status(201).json(newEvaluation);

    } 
    catch (error) {
      res.status(500).json({ error: "Failed to Evaluate" });
    }
  });

//FETCH GET  

router.get("/:id", async (req, res) => {
  const EvaluateId = req.params.id;
  try {
    const foundEvaluate = await Evaluation.findById(EvaluateId);
    if (!foundEvaluate) {
      res.send("No Evaluation Occured");
    } else {
      res.json(foundEvaluate);
    }
  } catch (error) {
    console.error("Error fetching Evaluation:", error);
    res.status(500).send("Internal Server Error");
  }
});



//PUT UPDATE


router.put("/:id", async (req, res) => {

  const EvaluateId =  req.params.id;
 const updatedData = req.body;
      
  // find document by id and update
  try {
    const updatedEvaluation = await Evaluation.findByIdAndUpdate(EvaluateId,updatedData,{
    new: true, 
    runValidators: true, // Run model validators on the updated data
    });
    if (!updatedEvaluation) {
      res.send("Nothing found");
    } else {
      res.send(updatedEvaluation);
    }
  } catch (err) {
    console.error("Error updating document:", err);
    res.status(500).send("Internal Server Error");
  }
});


// DELETE
router.delete('/:id',async(req,res)=>{
  const EvaluateId = req.params.id;
  
  try {
    const deletedData = await Evaluation.findByIdAndDelete(EvaluateId);

    if (!deletedData) {
      res.send("Nothing found");
    } else {
      res.send(deletedData);
    }
  } catch (err) {
    console.error("Error deleting document:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

