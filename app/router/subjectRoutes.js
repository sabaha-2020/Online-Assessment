
const express = require('express');
const subjectController = require("../controllers/subjectCntrl");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: API endpoints for managing subjects.
 */


/**
 * @swagger
 * /subjects/subjectcount:
 *   get:
 *     summary: Get the total count of subjects.
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: Total subject count successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalSubjectCount:
 *                   type: integer
 *                   description: Total count of subjects.
 */
router.get('/subjectcount',subjectController.countSubject );

/**
 * @swagger
 * /subjects/subject:
 *   get:
 *     summary: Get a list of all subjects.
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: List of all subjects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 */
router.get('/subject',subjectController. getAllSubject);//for listing subject

/**
 * @swagger
 * /subjects/count:
 *   get:
 *     summary: Get the total count of subjects.
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: Total subject count successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalSubjectCount:
 *                   type: integer
 *                   description: Total count of subjects.
 */
router.get('/count',subjectController.findTotalSubjectCount);


/**
 * @swagger
 * /subjects:
 *   get:
 *     summary: Get a list of all subjects.
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: List of subjects.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 */
router.get('/', subjectController.getSubjectList);

/**
 * @swagger
 * /subjects/catg/{categoryId}:
 *   get:
 *     summary: Get subjects based on a specific category.
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         description: ID of the category to filter subjects.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of subjects for the given category.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 */
router.get('/catg/:categoryId', subjectController.getSubjectsByCategory);


/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Get a specific subject by ID.
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subject to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 */
router.get("/:id",subjectController.getSubject );

 
/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Create a new subject.
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subjects:
 *                 type: object
 *                 properties:
 *                   qstnCategory:
 *                     type: string
 *                   name:
 *                     type: string
 *                   status:
 *                     type: string
 *                   descp:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                   createdBy:
 *                     type: string
 *                   updatedBy:
 *                     type: string
 *             example:
 *               subjects:
 *                 qstnCategory: "category_id"
 *                 name: "subject_name"
 *                 status: "create"
 *                 descp: "Subject description"
 *                 createdAt: "2023-08-23T12:00:00Z"
 *                 updatedAt: "2023-08-23T12:00:00Z"
 *                 createdBy: "creator_name"
 *                 updatedBy: "updater_name"
 *     responses:
 *       201:
 *         description: Subject created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 */

router.post("/", subjectController.createSubject );


/**
 * @swagger
 * /subjects/{id}:
 *   put:
 *     summary: Update a subject by ID.
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subject to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       200:
 *         description: Subject updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 */

router.put("/:id",subjectController.putSubject);

/**
 * @swagger
 * /subjects/{id}:
 *   delete:
 *     summary: Delete a subject by ID.
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subject to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subject deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 */

router.delete('/:id',subjectController.deleteSubject);



module.exports = router;