
const express = require('express');
const questionSetupController = require("../controllers/questionSetupCntrl");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Question Setup
 *   description: API endpoint for managing Question Setup.   
 */


/**
 * @swagger
 * /questionSetup/totalSetup-count:
 *   get:
 *     summary: Get the total count of question setups
 *     tags: [Question Setup]
 *     responses:
 *       200:
 *         description: Total count of question setups
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalSetupCount:
 *                   type: integer
 *                   description: Total count of question setups
 */
router.get('/totalQstnSetup-count',questionSetupController.findTotaSetupCount);//total count of qstnSetup 

/**
 * @swagger
 * /questionSetup/allqstnSetup:
 *   get:
 *     summary: Get a list of all question setups
 *     tags: [Question Setup]
 *     responses:
 *       200:
 *         description: List of all question setups
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/QuestionSetup'
 */
router.get('/allqstnSetup',questionSetupController.getqstnSetupList);//all of qstnSetup


/**
 * @swagger
 * /questionSetup:
 *   post:
 *     summary: Create a new question setup
 *     tags: [Question Setup]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               qset:
 *                 type: object
 *                 properties:
 *                   catgId:
 *                     type: string
 *                   subId:
 *                     type: string
 *                   testid:
 *                     type: string
 *                   duration:
 *                     type: number
 *                   maxMark:
 *                     type: number
 *                   minMark:
 *                     type: number
 *                   perQstnMark:
 *                     type: number
 *                   status:
 *                     type: string
 *             example:
 *               qset:
 *                 catgId: "category_id"
 *                 subId: "subject_id"
 *                 testid: "test_id"
 *                 duration: 60
 *                 maxMark: 100
 *                 minMark: 40
 *                 perQstnMark: 2
 *                 status: "create"
 *     responses:
 *       201:
 *         description: Created a new question setup
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionSetup'
 */
router.post("/", questionSetupController.createSetup);

/**
 * @swagger
 * /questionSetup/qstnCountSub:
 *   get:
 *     summary: Get the total count of question setups based on subjects
 *     tags: [Question Setup]
 *     responses:
 *       200:
 *         description: Total count of question setups based on subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 testId:
 *                   type: integer
 *                   description: Count of setups for the specified test ID
 */
router.get('/qstnCountSub',questionSetupController.countSetupForSubject); // total count of qstnSetup based on subject

/**
 * @swagger
 * /questionSetup/{subjectId}:
 *   get:
 *     summary: Get question setups based on a particular subject
 *     tags: [Question Setup]
 *     parameters:
 *       - in: path
 *         name: subjectId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved question setups based on a particular subject
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/QuestionSetup'
 */
router.get('/:subjectId',questionSetupController.getSetupsWithSubject );//qstnSetup based on a particular subject
 

/**
 * @swagger
 * /questionSetup/{id}:
 *   get:
 *     summary: Get a specific question setup by ID.
 *     tags: [Question Setup]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the question setup to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Question setup successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionSetup'
 */
router.get("/:id",questionSetupController.getSetup);

/**
 * @swagger
 * /questionSetup/{id}:
 *   put:
 *     summary: Update a question setup by ID
 *     tags: [Question Setup]
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
 *               qset:
 *                 type: object
 *                 properties:
 *                   catgId:
 *                     type: string
 *                   subId:              
 *                     type: string 
 *                   testid:
 *                     type: string 
 *                   duration:
 *                     type: number
 *                   maxMark:
 *                     type: number
 *                   minMark:
 *                     type: number
 *                   perQstnMark:
 *                     type: number
 *                   status:
 *                     type: string
 *             example:
 *               qset:
 *                 catgId: "catg_id" 
 *                 subId: "sub_Id" 
 *                 testid: "test_id"
 *                 duration: 120
 *                 maxMark: 150
 *                 minMark: 50
 *                 perQstnMark: 3
 *                 status: "update"
 *     responses:
 *       200:
 *         description: Updated a question setup
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionSetup'
 */
router.put("/:id",questionSetupController.putSetup);


/**
 * @swagger
 * /questionSetup/{id}:
 *   delete:
 *     summary: Delete a question setup by ID
 *     tags: [Question Setup]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted a question setup by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuestionSetup'
 */
router.delete('/:id',questionSetupController.deleteSetup);


module.exports = router;                            