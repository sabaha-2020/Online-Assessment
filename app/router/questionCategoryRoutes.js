const express = require('express');
const questionCategoryController = require("../controllers/questionCategoryCntrl");
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Question Categories
 *   description: API endpoints for managing question categories.
 */


/**
 * @swagger
 * /qstnCategory/count:
 *   get:
 *     summary: Get the total count of question categories.
 *     tags: [Question Categories]
 *     responses:
 *       200:
 *         description: Total category count successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalCategoryCount:
 *                   type: integer
 *                   description: Total count of question categories.
 */

router.get('/count',questionCategoryController.findTotalCategoryCount);

/**
 * @swagger
 * /qstnCategory/category:
 *   get:
 *     summary: Get a list of all question categories.
 *     tags: [Question Categories]
 *     responses:
 *       200:
 *         description: List of question categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: Category name.
 */
router.get('/category',questionCategoryController.Category );


/**
 * @swagger
 * /qstnCategory/{id}:
 *   get:
 *     summary: Get a specific question category by ID.
 *     tags: [Question Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question category to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question category successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID of the question category.
 *                 qstnCategory:
 *                   type: object
 *                   description: Question category details.
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Category name.
 *                     descp:
 *                       type: string
 *                       description: Category description.
 *                     status:
 *                       type: string
 *                       description: Category status.
 */

router.get("/:id",questionCategoryController.getCategory);


/**
 * @swagger
 * /qstnCategory:
 *   post:
 *     summary: Create a new question category.
 *     tags: [Question Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               qstnCategory:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Category name.
 *                   descp:
 *                     type: string
 *                     description: Category description.
 *                   status:
 *                     type: string
 *                     description: Category status.
 *                   createdBy:
 *                     type: string
 *                     description: Creator of the category.
 *                   updatedBy:
 *                     type: string
 *                     description: Updater of the category.
 *     responses:
 *       201:
 *         description: Question category created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID of the created question category.
 *                 qstnCategory:
 *                   type: object
 *                   description: Created question category details.
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Category name.
 *                     descp:
 *                       type: string
 *                       description: Category description.
 *                     status:
 *                       type: string
 *                       description: Category status.
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Creation date of the category.
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Last update date of the category.
 *                     createdBy:
 *                       type: string
 *                       description: Creator of the category.
 *                     updatedBy:
 *                       type: string
 *                       description: Updater of the category.
 */
router.post("/", questionCategoryController.postCategory);


/**
 * @swagger
 * /qstnCategory:
 *   get:
 *     summary: Get a list of all question categories.
 *     tags: [Question Categories]
 *     responses:
 *       200:
 *         description: List of question categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: Category name.
 */

router.get('/',questionCategoryController.getAllCategory );


/**
 * @swagger
 * /qstnCategory/{id}:
 *   put:
 *     summary: Update a question category by ID.
 *     tags: [Question Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question category to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               qstnCategory:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Updated category name.
 *                   descp:
 *                     type: string
 *                     description: Updated category description.
 *                   status:
 *                     type: string
 *                     description: Updated category status.
 *                   updatedBy:
 *                     type: string
 *                     description: Updater of the category.
 *     responses:
 *       200:
 *         description: Question category updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID of the updated question category.
 *                 qstnCategory:
 *                   type: object
 *                   description: Updated question category details.
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Updated category name.
 *                     descp:
 *                       type: string
 *                       description: Updated category description.
 *                     status:
 *                       type: string
 *                       description: Updated category status.
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Last update date of the category.
 *                     updatedBy:
 *                       type: string
 *                       description: Updater of the category.
 */
router.put("/:id",questionCategoryController.putCategory);


/**
 * @swagger
 * /qstnCategory/{id}:
 *   delete:
 *     summary: Delete a question category by ID.
 *     tags: [Question Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question category to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question category deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: ID of the deleted question category.
 *                 qstnCategory:
 *                   type: object
 *                   description: Deleted question category details.
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: Deleted category name.
 *                     descp:
 *                       type: string
 *                       description: Deleted category description.
 *                     status:
 *                       type: string
 *                       description: Deleted category status.
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Last update date before deletion.
 *                     updatedBy:
 *                       type: string
 *                       description: Updater before deletion.
 */
router.delete('/:id',questionCategoryController.deleteCategory);



module.exports = router;