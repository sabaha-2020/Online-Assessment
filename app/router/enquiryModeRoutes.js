const express = require("express");
const router = express.Router();
const enquiryTypeController = require("../controllers/enquiryModeCntrl");


/**
 * @swagger
 * tags:
 *   name: Enquiry Type
 *   description: API endpoints for managing Enquiry Types.
 */

/**
 * @swagger
 * /enquiryMode:
 *   post:
 *     summary: Create a new enquiry mode
 *     tags: [Enquiry Mode]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EnquiryMode'
 *           example:
 *             userId: "user_id"
 *             enquiryMode: "Email"
 *     responses:
 *       201:
 *         description: Created enquiry mode
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EnquiryMode'
 */


router.post("/", enquiryTypeController.createEnquiryMode);// POST Create EnquiryType.

/**
 * @swagger
 * /enquiryMode:
 *   get:
 *     summary: Get all enquiry modes
 *     tags: [Enquiry Mode]
 *     responses:
 *       200:
 *         description: Retrieved enquiry modes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EnquiryMode'
 */
router.get("/", enquiryTypeController.getEnquiryModes); // GET All EnquiryTypes


/**
 * @swagger
 * /enquiryMode/{userId}:
 *   get:
 *     summary: Get enquiry modes by user ID
 *     tags: [Enquiry Mode]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved enquiry modes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EnquiryMode'
 */

router.get("/:userId", enquiryTypeController.foundEnquiryMode);// GET  EnquiryTypes by id


/**
 * @swagger
 * /enquiryMode/{enquiryModeId}:
 *   put:
 *     summary: Update an enquiry mode by ID
 *     tags: [Enquiry Mode]
 *     parameters:
 *       - in: path
 *         name: enquiryModeId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EnquiryMode'
 *           example:
 *             userId: "user_id"
 *             enquiryMode: "Phone"
 *     responses:
 *       200:
 *         description: Updated enquiry mode
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EnquiryMode'
 */

router.put("/:enquiryModeId", enquiryTypeController.updateEnquiryMode); // PUT Update EnquiryType by ID

/**
 * @swagger
 * /enquiryMode/{enquiryModeId}:
 *   delete:
 *     summary: Delete an enquiry mode by ID
 *     tags: [Enquiry Mode]
 *     parameters:
 *       - in: path
 *         name: enquiryModeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted enquiry mode
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EnquiryMode'
 */

router.delete("/:enquiryModeId", enquiryTypeController.deleteEnquiryMode); // DELETE EnquiryType by ID

module.exports = router;
