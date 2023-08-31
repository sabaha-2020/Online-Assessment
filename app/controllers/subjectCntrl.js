
const subject = require('../models/subjectModel');
const questionCategory =require('../models/questionCategoryModel');


// Create and Save a new subject
exports.createSubject = async (req, res) => {
  if (!req.body.subjects.qstnCategory || !req.body.subjects.name || !req.body.subjects.descp) {
      res.status(400).send({ message: "Required fields missing!" });
      return;
  }

  const newSubject = new subject({
      subjects: {
          qstnCategory: req.body.subjects.qstnCategory,
          name: req.body.subjects.name,
          status: req.body.subjects.status || "create",
          descp: req.body.subjects.descp,
          createdAt: req.body.subjects.createdAt || Date.now(),
          updatedAt: req.body.subjects.updatedAt || Date.now(),
          createdBy: req.body.subjects.createdBy || "",
          updatedBy: req.body.subjects.updatedBy || ""
      }
  });

  try {
      await newSubject.save();
      res.status(201).json(newSubject);
  } catch (error) {
      console.error("Error creating subject:", error);
      res.status(500).json({ error: "Failed to create subject" });
  }
};

//GET SUBJECT BY ID

exports.getSubject = async (req, res) => {
  const subjectId = req.params.id;

  try {
    const foundsubject = await subject.findById(subjectId);
    if (!foundsubject) {
      res.send("No subject found");
    } else {
      res.json(foundsubject);
    }
  } catch (error) {
    console.error("Error fetching subject:", error);
    res.status(500).send("Internal Server Error");
  }
};










//GET FULL COUNT OF SUBJECT

exports.findTotalSubjectCount = async (req, res) => {
  try {
    const SubjectCount = await subject.countDocuments();
    res.json({ SubjectCount });
  } catch (error) {
    console.error('Error fetching subject count:', error);
    res.status(500).send('Internal Server Error');
  }
};

// COUNT OF a(1) subjects based on catogory

exports.countSubject = async (req, res) => {
try {
  const subjectCounts = await subject.aggregate([
    {
      $group: {
        _id: '$subjects.qstnCategory', // Group by category ID
        mycount: { $sum: 1 } // Count subjects in each category
      }
    }
  ]);

  const result = {};

  for (const entry of subjectCounts) {
    const categoryId = entry._id;

    const category = await questionCategory.findById(categoryId); // getting the category details

    if (category) {
      const categoryName = category.qstnCategory.name; 
      result[categoryName] = entry.mycount; // Assigning  the count to the category name
    }
  }

  res.json(result);
} catch (error) {
  console.error('Error fetching subject count:', error);
  res.status(500).send('Internal Server Error');
}
};



//PUT UPDATE


  exports.putSubject = async (req, res) => {

  const subjectId =  req.params.id;
 const updatedData = req.body;
      
  // find document by id and update
  try {
    const updatedSubject = await subject.findByIdAndUpdate(subjectId,updatedData,{
    new: true, 
    runValidators: true, 
    });
    if (!updatedSubject) {
      res.send("Nothing found");
    } else {
      res.send(updatedSubject);
    }
  } catch (err) {
    console.error("Error updating document:", err);
    res.status(500).send("Internal Server Error");
  }
};




//DELETE
exports.deleteSubject = async(req,res)=>{
  const subjectId = req.params.id;
  
  try {
    const deletedSubject = await subject.findByIdAndDelete(subjectId);

    if (!deletedSubject) {
      res.send("Nothing found");
    } else {
      res.send(deletedSubject);
    }
  } catch (err) {
    console.error("Error deleting document:", err);
    res.status(500).send("Internal Server Error");
  }
};

// get subject based on  all categories
// get subject list 

exports.getSubjectList = async(req,res)=>{

  try{
    const subjectList = await subject.find()

if(!subjectList){

  res.send("No subjects found");

}else{
res.json(subjectList)
}
  }
  catch(error){
    console.error("Error in fetching subject wth category document:", error);
    res.status(500).send("Internal Server Error");
  }
};





// get subjects based on particular category

exports.getSubjectsByCategory = async (req, res) => {
  const categoryId = req.params.categoryId; 

  try {
    const SubjectsWithCategory = await subject.find({ "subjects.qstnCategory": categoryId});

    if (!SubjectsWithCategory || SubjectsWithCategory.length === 0) {
      res.send("No subjects found for this category");
    } else {
      res.json(SubjectsWithCategory);
    }
  } catch (error) {
    console.error("Error fetching subjects with category:", error);
    res.status(500).send("Internal Server Error");
  }
};


//GET ALL SUBJECT LIST ONLY

exports.getAllSubject = async (req, res ) => {
  try {
      const allSubject = await subject.find();
      if (!allSubject || allSubject.length === 0) {
          res.send("No subjects found");
      } else {
          const subjectNames = allSubject.map(Subject => Subject.subjects.name);
          res.json(subjectNames);
      }
  } catch (error) {
      console.error("Error in fetching total category document:", error);
      res.status(500).send("Internal Server Error");
  }
};

