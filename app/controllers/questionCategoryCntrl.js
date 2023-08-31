
const questionCategory = require('../models/questionCategoryModel');

//create a category
exports.postCategory = async (req, res) => {
    if (!req.body.qstnCategory || !req.body.qstnCategory.name) {
        res.status(400).send({ message: "Category name cannot be empty!" });
        return;
    }
    
    const newCategory = new questionCategory({
        qstnCategory: {
            name: req.body.qstnCategory.name,
            descp: req.body.qstnCategory.descp,
            status: req.body.qstnCategory.status || "create",
            createdAt: Date.now(),
            updatedAt: Date.now(),
            createdBy: req.body.qstnCategory.createdBy,
            updatedBy: req.body.qstnCategory.updatedBy
        }
    });
    
    try {
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        console.error("Error creating question category", error);
        res.status(500).json({ error: "Failed to create question category" });
    }
};



// count of all category
exports.findTotalCategoryCount = async (req, res) => {
    try {
        const totalCategoryCount = await questionCategory.countDocuments();
        res.json({ totalCategoryCount });
    } catch (error) {
        console.error('Error fetching category count:', error);
        res.status(500).send('Internal Server Error');
    }
};



//update category
exports.putCategory = async (req, res) => {
    const categoryId = req.params.id;
    const updatedData = req.body;
      
    try {
        const updatedCategory = await questionCategory.findByIdAndUpdate(categoryId, updatedData, {
            new: true, 
            runValidators: true,
        });
        if (!updatedCategory) {
            res.send("Nothing found");
        } else {
            res.send(updatedCategory);
        }
    } catch (err) {
        console.error("Error updating document:", err);
        res.status(500).send("Internal Server Error");
    }
};


//delete category
exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;
    
    try {
        const deletedCategory = await questionCategory.findByIdAndDelete(categoryId);
        if (!deletedCategory) {
            res.send("Nothing found");
        } else {
            res.send(deletedCategory);
        }
    } catch (err) {
        console.error("Error deleting document:", err);
        res.status(500).send("Internal Server Error");
    }
};


// get category name list
exports.getAllCategory = async (req, res) => {
    try {
        const allCategories = await questionCategory.find();
        if (!allCategories || allCategories.length === 0) {
            res.send("No categories found");
        } else {
            const categoryNames = allCategories.map(category => category.qstnCategory.name);
            res.json(categoryNames);
        }
    } catch (error) {
        console.error("Error in fetching total category document:", error);
        res.status(500).send("Internal Server Error");
    }
};


//get total category 

exports.Category =async(req,res)=>{
  try {
    const Cata= await questionCategory.find().populate('qstnCategory');
    if (!Cata || Cata.length === 0) {
        res.send("No categories found");
    } else {
       
        res.json(Cata);
    }
} catch (error) {
    console.error("Error in fetching total category document:", error);
    res.status(500).send("Internal Server Error");
}
};



//get category by id

exports.getCategory = async (req, res) => {
    const categoryId = req.params.id;
    try {
        const foundCategory = await questionCategory.findById(categoryId);
        if (!foundCategory) {
            res.send("No question category found");
        } else {
            res.json(foundCategory);
        }
    } catch (error) {
        console.error("Error fetching question category:", error);
        res.status(500).send("Internal Server Error");
    }
};
