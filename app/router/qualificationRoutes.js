const express = require("express");
const qualificationController = require("../controllers/qualificationCntrl");
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Qualification
 *   description: API endpoints for managing Qualifications.
 */

/**
 * @swagger
 * /qualifications/{userId}:
 *   post:
 *     summary: Create a new qualification
 *     tags: [Qualification]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/qualifications'
 *           example:
 *             userId: "user_id"
 *             qualification: "UG"
 *             fieldOfStudy: "IT"
 *             institute: "abc institute"
 *             completionYear: 2023
 *     responses:
 *       201:
 *         description: Created qualification
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/qualifications'
 */
router.post("/:userId", qualificationController.createQualification);


/**
 * @swagger
 * /qualifications/{userId}:
 *   get:
 *     summary: Get qualifications by user ID
 *     tags: [Qualification]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved qualifications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/qualifications'
 */
router.get("/:userId", qualificationController.getQualifications);

/**
 * @swagger
 * /qualifications/{qualificationId}:
 *   put:
 *     summary: Update qualification by qualification ID
 *     tags: [Qualification]
 *     parameters:
 *       - in: path
 *         name: qualificationId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/qualifications'
 *           example:
 *             userId: "64d4b79d170d3408f45a2927"
 *             qualification: "PhD"
 *             fieldOfStudy: "Computer Science"
 *             institute: "Example University"
 *             completionYear: 2025
 *     responses:
 *       200:
 *         description: Updated qualification
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/qualifications'
 */
router.put("/:qualificationId", qualificationController.updateQualification);

/**
 * @swagger
 * /qualifications/{qualificationId}:
 *   delete:
 *     summary: Delete qualification by qualification ID
 *     tags: [Qualification]
 *     parameters:
 *       - in: path
 *         name: qualificationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted qualification
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/qualifications'
 */
router.delete("/:qualificationId", qualificationController.deleteQualification);

module.exports = router;
