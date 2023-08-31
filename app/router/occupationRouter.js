const express = require('express');
const  occupationController = require("../controllers/occupationCntrl");
const router =  express.Router();

/**
 * @swagger
 * tags:
 *   name: Occupation
 *   description: API endpoints for managing Occupations.
 */



/**
 * @swagger
 * /occupations/{userId}:
 *   post:
 *     summary: Create a new occupation
 *     tags: [Occupation]
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
 *             $ref: '#/components/schemas/Occupation'
 *           example:
 *             userId: "64d4b79d170d3408f45a2927"
 *             title: "Software Engineer"
 *             description: "Develops software applications"
 *             status: "create"
 *     responses:
 *       201:
 *         description: Created occupation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Occupation'
 */


router.post("/:userId", occupationController.createOccupation);

/**
 * @swagger
 * /occupations/{userId}:
 *   get:
 *     summary: Get occupations by user ID
 *     tags: [Occupation]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved occupations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Occupation'
 */
router.get("/:userId", occupationController.getOccupationsByUserId);


/**
 * @swagger
 * /occupations/{occupationId}:
 *   put:
 *     summary: Update occupation by occupation ID
 *     tags: [Occupation]
 *     parameters:
 *       - in: path
 *         name: occupationId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Occupation'
 *           example:
 *             userId: "user_id"
 *             title: "Senior Software Engineer"
 *             description: "Leads development teams and architects software solutions"
 *             status: "update"
 *     responses:
 *       200:
 *         description: Updated occupation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Occupation'
 */
router.put("/:occupationId", occupationController.putOccupation);

/**
 * @swagger
 * /occupations/{occupationId}:
 *   delete:
 *     summary: Delete occupation by occupation ID
 *     tags: [Occupation]
 *     parameters:
 *       - in: path
 *         name: occupationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted occupation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Occupation'
 */
router.delete("/:occupationId", occupationController.deleteOccupation);

module.exports = router;