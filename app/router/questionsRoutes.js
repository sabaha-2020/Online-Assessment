
const express = require('express');
const questionController = require("../controllers/questionsCntrl");
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: API endpoint for managing Questions.   
 */



/**
 * @swagger
 * /questions/question-qstnSetup:
 *   get:
 *     summary: Get all questions with their setup details
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: List of all questions with setup details
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Question'
 */
router.get('/question-qstnSetup',questionController.getQuestionWithSetup);//all questions with their setup details.

/**
 * @swagger
 * /questions/questionsCount:
 *   get:
 *     summary: Get the total count of questions
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: Total count of questions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalQuestionCount:
 *                   type: integer
 *                   description: Total count of questions
 */
router.get('/questionsCount',questionController.findTotalQuestionCount);//total question count

/**
 * @swagger
 * /questions/questionsList:
 *   get:
 *     summary: Get a list of all questions
 *     tags: [Questions]
 *     responses:
 *       200:
 *         description: List of all questions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

router.get('/questionsList',questionController.getAllQuestion);//all question list

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Create a new question
 *     tags: [Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionData:
 *                 type: object
 *                 properties:
 *                   question:
 *                     type: string
 *                     required: true
 *                   choices:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         descp:
 *                           type: string
 *                         crcrtAnsYN:
 *                           type: string
 *                   createdBy:
 *                     type: string
 *                   updatedBy:
 *                     type: string
 *                   status:
 *                     type: string
 *             example:
 *               questionData:
 *                 question: "What is the capital of France?"
 *                 choices:
 *                   - descp: "Paris"
 *                     crcrtAnsYN: "Y"
 *                   - descp: "London"
 *                     crcrtAnsYN: "N"
 *                 createdBy: "vendor"
 *                 updatedBy: "vendor"
 *                 status: "create"
 *     responses:
 *       201:
 *         description: Created a new question
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 */

router.post("/", questionController.createQuestion);


/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     summary: Get a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved a question by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 */
router.get("/:id",questionController.getQuestion);
/**
 * @swagger
 * /questions/{id}:
 *   put:
 *     summary: Update a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               questionData:
 *                 type: object
 *                 properties:
 *                   qsetId:
 *                     type: string
 *                   question:
 *                     type: string
 *                   choices:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         descp:
 *                           type: string
 *                         crcrtAnsYN:
 *                           type: string
 *                   status:
 *                     type: string
 *                   createdBy:
 *                     type:string
 *                   updatedBy:
 *                      type:string
 *             example:
 *               questionData:
 *                 qsetId: "qstn_id"
 *                 question: "Updated question?"
 *                 choices:
 *                   - descp: "Option 1"
 *                     crcrtAnsYN: "Y"
 *                   - descp: "Option 2"
 *                     crcrtAnsYN: "N"
 *                 status: "update"
 *                 createdBy: "ruhi"
 *                 updatedBy: "admin"
 *     responses:
 *       200:
 *         description: Updated a question
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 */
router.put("/:id",questionController.putQuestion);

/**
 * @swagger
 * /questions/{id}:
 *   delete:
 *     summary: Delete a question by ID
 *     tags: [Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted a question by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Question'
 */
router.delete('/:id',questionController.deleteQuestion);

module.exports = router;


