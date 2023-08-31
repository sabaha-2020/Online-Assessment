const express = require('express');
const userProfileController = require('../controllers/userProfileCntrol');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: UserProfile
 *   description: API endpoints for managing User Profiles.
 */


/**
 * @swagger
 * /updatedUser/{userId}:
 *   post:
 *     summary: Create a new user profile
 *     tags: [UserProfile]
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
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 required: true
 *               profileImage:
 *                 type: string
 *               email:
 *                 type: string
 *               org_name:
 *                 type: string
 *               org_license_no:
 *                 type: string
 *               org_id:
 *                 type: string
 *               interest:
 *                 type: array
 *                 items:
 *                   type: string
 *               qualification:
 *                 type: array
 *                 items:
 *                   type: string
 *               occupation:
 *                 type: array
 *                 items:
 *                   type: string
 *               status:
 *                 type: string
 *             example:
 *               userId: "user_id"
 *               profileImage: "image_url"
 *               email: "user@examplee.com"
 *               org_name: "Organization Name"
 *               org_license_no: "License Number"
 *               org_id: "org_id"
 *               interest: ["Interest 1", "Interest 2"]
 *               qualification: ["Qualification 1", "Qualification 2"]
 *               occupation: ["Occupation 1", "Occupation 2"]
 *               status: "create"
 *     responses:
 *       201:
 *         description: Created user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile1'
 */
router.post('/:userId', userProfileController.createUserProfile);// Create a new user profile

/**
 * @swagger
 * /updatedUser/{userId}:
 *   get:
 *     summary: Get user profile by user ID
 *     tags: [UserProfile]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile1'
 */

router.get('/:userId', userProfileController.getprofileByUserId);// Get user profile by userId

/**
 * @swagger
 * /updatedUser/{userProfileId}:
 *   put:
 *     summary: Update user profile by profile ID
 *     tags: [UserProfile]
 *     parameters:
 *       - in: path
 *         name: userProfileId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserProfile1'
 *           example:
 *             userId: "user_id"
 *             profileImage: "image_url"
 *             email: "user@examplee.com"
 *             org_name: "Organization Name"
 *             org_license_no: "License Number"
 *             org_id: "org_id"
 *             interest: ["Interest 1", "Interest 2"]
 *             qualification: ["Qualification 1", "Qualification 2"]
 *             occupation: ["Occupation 1", "Occupation 2"]
 *             status: "update"
 *     responses:
 *       200:
 *         description: Updated user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile1'
 */
router.put('/:userProfileId', userProfileController.updateUserProfile);// Update user profile by userId

/**
 * @swagger
 * /updatedUser/{userProfileId}:
 *   delete:
 *     summary: Delete user profile by profile ID
 *     tags: [UserProfile]
 *     parameters:
 *       - in: path
 *         name: userProfileId
 *         required: true
 *         schema:                                                                       
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted user profile
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserProfile1'
 */

router.delete('/:userProfileId', userProfileController.deleteUserProfile);// Delete user profile by userId


module.exports = router;
