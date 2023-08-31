const express = require("express");
const router = express.Router();
const SupportTypeController = require("../controllers/supportTypeCntrl");

/**
 * @swagger
 * tags:
 *   name: Support Type
 *   description: API endpoints for managing Support Types.
 */

/**
 * @swagger
 * /supportType:
 *   post:
 *     summary: Create a new support type
 *     tags: [Support Type]
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
 *               supportType:
 *                 type: string
 *                 example: "Technical Support"
 *               description:
 *                 type: string
 *                 example: "Technical support service"
 *     responses:
 *       201:
 *         description: Created support type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 supportType:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */
router.post("/", SupportTypeController.createSupportType); // POST Create SupportType

/**
 * @swagger
 * /supportType:
 *   get:
 *     summary: Get all support types
 *     tags: [Support Type]
 *     responses:
 *       200:
 *         description: Retrieved support types
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
 *                   supportType:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get("/", SupportTypeController.getSupportTypes); // GET All SupportTypes

/**
 * @swagger
 * /supportType/{userId}:
 *   get:
 *     summary: Get support types by user ID
 *     tags: [Support Type]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved support types
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
 *                   supportType:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get("/:userId", SupportTypeController.foundSupportType); // GET All SupportTypes




/**
 * @swagger
 * /supportType/{supportTypeId}:
 *   put:
 *     summary: Update a support type by ID
 *     tags: [Support Type]
 *     parameters:
 *       - in: path
 *         name: supportTypeId
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
 *               supportType:
 *                 type: string
 *                 example: "Updated Support"
 *               description:
 *                 type: string
 *                 example: "Updated support service"
 *     responses:
 *       200:
 *         description: Updated support type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 supportType:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */
router.put("/:supportTypeId", SupportTypeController.updateSupportType);// PUT Update SupportType by ID

/**
 * @swagger
 * /supportType/{supportTypeId}:
 *   delete:
 *     summary: Delete a support type by ID
 *     tags: [Support Type]
 *     parameters:
 *       - in: path
 *         name: supportTypeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted support type
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 userId:
 *                   type: string
 *                 supportType:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 */
router.delete("/:supportTypeId", SupportTypeController.deleteSupportType);// DELETE SupportType by ID


module.exports = router;
