const express = require('express');
const router = express.Router();
const Submit = require('../models/submitModel');

//POST

router.post('/',async(req,res)=>{

try{
    const newSubmit = new Submit(req.body)
    await newSubmit.save();
    res.status(201).json (newSubmit);
}
catch(error){
res.status(404).json({error:"Failed to  Submit"});
}
});

//FETCH 

router.get('/:id',async(req,res)=>{
    const SubmitId = req.params.id;
try{

   const foundSubmit = await Submit.findById(SubmitId)
   if(!foundSubmit){
    res.send("No Submit was found");
   }else{
    res.json(foundSubmit) ;
   }

}
catch(error){
console.error("Error fetching Submit :", error);   
res.status(404).send({error:"Internal Server Error"});
}

});

//UPDATE

router.put('/:id',async(req,res)=>{
    const submitId = req.params.id;
    const updateData = req.body;
    try{
const updateSubmit = await Submit.findByIdAndUpdate(submitId,updateData,{
new:true,
runValidators:true,
});
if(!updateSubmit){
    res.send("Nothing found");
}else{
    res.send(updateSubmit);
}

    }
    catch(error){
        console.log({error:"Error Updating document"});
res.status(404).send({error:"Internal Server Eroor"})
    }
})

//DELETE

router.delete("/:id",async(req,res)=>{

    const SubmitId = req.params.id;
    

    try{
const deletedData = await Submit.findById(SubmitId);
if(!deletedData){
    res.send("Nothing Found");
}else{
    res.send(deletedData);
}

    }
    catch(error){
console.log({error:"Error deleting document"});
res.send(404).send({error:"Internal Server Error"})

    }
});

module.exports = router;