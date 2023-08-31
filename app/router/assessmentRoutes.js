const express = require('express');
const router = express.Router();
const assessment = require('../models/assessmentModel');

//POST


router.post('/',async(req,res)=>{
    try{
    
       const newAssessment = new assessment(req.body);
       await newAssessment .save();
       res.status(201).json(newAssessment);
    }catch(error){
    res.status(404).json({error:"Failed to create assessment"});
    }
    });
    
     
    //FETCH GET  
    
    router.get("/:id", async (req, res) => {
       const assessmentId = req.params.id;
       try {
         const foundAssessment  = await assessment.findById(assessmentId);
         if (!foundAssessment) {
           res.send("No assessment found");
         } else {
           res.json(foundAssessment);
         }
       } catch (error) {
         console.error("Error fetching assessment:", error);
         res.status(500).send("Internal Server Error");
       }
     });
    
    
    
    //PUT UPDATE
    
    
    router.put("/:id", async (req, res) => {
    
     const assessmentId =  req.params.id;
    const updatedData = req.body;
         
     // find document by id and update
     try {
       const updatedAssessment = await assessment.findByIdAndUpdate(assessmentId,updatedData,{
       new: true, 
       runValidators: true, // Run model validators on the updated data
       });
       if (!updatedAssessment) {
         res.send("Nothing found");
       } else {
         res.send(updatedAssessment);
       }
     } catch (err) {
       console.error("Error updating document:", err);
       res.status(500).send("Internal Server Error");
     }
    });
    
    
    // DELETE
    router.delete('/:id',async(req,res)=>{
     const assessmentId= req.params.id;
     
     try {
       const deletedData = await assessment.findByIdAndDelete(assessmentId);
    
       if (!deletedData) {
         res.send("Nothing found");
       } else {
         res.send(deletedData);
       }
     } catch (err) {
       console.error("Error assessing document:", err);
       res.status(500).send("Internal Server Error");
     }
    });
    
    module.exports = router;