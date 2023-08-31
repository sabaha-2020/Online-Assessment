const express = require("express");
const router = express.Router();
const enquiryTypeController = require("../controllers/enquiryTypeCntrl");



/**
 * @swagger
 * tags:
 *   name: Enquiry Type
 *   description: API endpoints for managing Enquiry Types.
 */

/**
 * @swagger
 * /enquirytype:
 *   post:
 *     summary: Create a new enquiry type
 *     tags: [Enquiry Type]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: "user_id"
 *               enquiryType:
 *                 type: string
 *                 example: "General Inquiry"
 *     responses:
 *       201:
 *         description: Created enquiry type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 enquiryType:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */

router.post("/", enquiryTypeController.createEnquiryType); // POST Create EnquiryType

/**
 * @swagger
 * /enquirytype:
 *   get:
 *     summary: Get all enquiry types
 *     tags: [Enquiry Type]
 *     responses:
 *       200:
 *         description: Retrieved enquiry types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   enquiryType:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get("/", enquiryTypeController.getEnquiryTypes);// GET All EnquiryTypes


/**
 * @swagger
 * /enquirytype/{userId}:
 *   get:
 *     summary: Get enquiry types by user ID
 *     tags: [Enquiry Type]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved enquiry types
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   userId:
 *                     type: string
 *                   enquiryType:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get("/:userId", enquiryTypeController.foundEnquiryType);  // GET  EnquiryTypes by Id



/**
 * @swagger
 * /enquirytype/{enquiryTypeId}:
 *   put:
 *     summary: Update an enquiry type by ID
 *     tags: [Enquiry Type]
 *     parameters:
 *       - in: path
 *         name: enquiryTypeId
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
 *               userId:
 *                 type: string
 *                 example: "user_id"
 *               enquiryType:
 *                 type: string
 *                 example: "Updated Inquiry"
 *     responses:
 *       200:
 *         description: Updated enquiry type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 enquiryType:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */
router.put("/:enquiryTypeId", enquiryTypeController.updateEnquiryType);  // PUT Update EnquiryType by ID




/**
 * @swagger
 * /enquirytype/{enquiryTypeId}:
 *   delete:
 *     summary: Delete an enquiry type by ID
 *     tags: [Enquiry Type]
 *     parameters:
 *       - in: path
 *         name: enquiryTypeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted enquiry type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 enquiryType:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */

router.delete("/:enquiryTypeId", enquiryTypeController.deleteEnquiryType);// DELETE EnquiryType by ID

module.exports = router;
