const express = require("express");
const interestController = require("../controllers/interestCntrl");
const router = express.Router();


/**
 * @swagger
 * tags:
 *   name: Interest
 *   description: API endpoints for managing Interests.
 */

/**
 * @swagger
 * /interests/{userId}:
 *   post:
 *     summary: Create a new interest
 *     tags: [Interest]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true.
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/interests'
 *           example:
 *             userId: "user_id"
 *             interest: ["writing","Reading"]             
 *     responses:
 *       201:
 *         description: Created interest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/interests'
 */
router.post("/:userId", interestController.createInterest);


/**
 * @swagger
 * /interests/{userId}:
 *   get:
 *     summary: Get interests by user Id
 *     tags: [Interest]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved interests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/interests'
 */

router.get("/:userId", interestController.getInterestsByUserId);

/**
 * @swagger
 * /interests/{interestId}:
 *   put:
 *     summary: Update interest by interest ID
 *     tags: [Interest]
 *     parameters:
 *       - in: path
 *         name: interestId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/interests'
 *     responses:
 *       200:
 *         description: Updated interest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/interests'
 */
router.put("/:interestId", interestController.putInterest);

/**
 * @swagger
 * /interests/{interestId}:
 *   delete:
 *     summary: Delete interest by interest ID
 *     tags: [Interest]
 *     parameters:
 *       - in: path
 *         name: interestId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted interest
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/interests'
 */
router.delete("/:interestId", interestController.deleteInterest);

module.exports = router;
