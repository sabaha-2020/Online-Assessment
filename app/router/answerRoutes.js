const express=require('express');
const router = express.Router();
const Answers =require('../models/answerModel');

//POST

router.post('/',async(req,res)=>{
try{

   const newAnswers = new Answers(req.body);
   await newAnswers .save();
   res.status(201).json(newAnswers);
}catch(error){
res.status(404).json({error:"Failed to create answer"});
}
});

 
//FETCH GET  

router.get("/:id", async (req, res) => {
   const answerId = req.params.id;
   try {
     const foundAnswers  = await Answers.findById(answerId);
     if (!foundAnswers) {
       res.send("No answers found");
     } else {
       res.json(foundAnswers);
     }
   } catch (error) {
     console.error("Error fetching answers:", error);
     res.status(500).send("Internal Server Error");
   }
 });



//PUT UPDATE


router.put("/:id", async (req, res) => {

 const answerId =  req.params.id;
const updatedData = req.body;
     
 // find document by id and update
 try {
   const updatedAnswers = await Answers.findByIdAndUpdate(answerId,updatedData,{
   new: true, 
   runValidators: true, // Run model validators on the updated data
   });
   if (!updatedAnswers) {
     res.send("Nothing found");
   } else {
     res.send(updatedAnswers);
   }
 } catch (err) {
   console.error("Error updating document:", err);
   res.status(500).send("Internal Server Error");
 }
});


// DELETE
router.delete('/:id',async(req,res)=>{
 const answerId= req.params.id;
 
 try {
   const deletedData = await Answers.findByIdAndDelete(answerId);

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