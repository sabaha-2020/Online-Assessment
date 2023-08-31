const express = require('express');
const userController = require("../controllers/userCntrl");
const router = express.Router();



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing Users.
 */

/**
 * @swagger
 * /users/userTypeCount:
 *   get:
 *     summary: Get user type counts
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User type counts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userType:
 *                     type: string
 *                   count:
 *                     type: integer
 */
router.get("/userTypeCount",userController.getUserTypeCount);//get count of usertype

/**
 * @swagger
 * /users/userRolesCount:
 *   get:
 *     summary: Get user role counts
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: User role counts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userRoles:
 *                     type: string
 *                   count:
 *                     type: integer
 */
router.get("/userRolesCount",userController.getUserRolesCount); //get count of usertype

/**
 * @swagger
 * /users/usersNames:
 *   get:
 *     summary: Get a list of users based on their names
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Retrieved a list of users based on names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 description: User's first name
 */
router.get("/usersNames", userController.getAllUsers ); // user based on their names list

/**
 * @swagger
 * /users/usersList:
 *   get:
 *     summary: Get a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Retrieved a list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/usersList", userController.getUsersList ); //users name list


/**
 * @swagger
 * /users/usersCount:
 *   get:
 *     summary: Get the total count of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Retrieved the total count of users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 UserCount:
 *                   type: integer
 */
router.get("/usersCount", userController.findTotalUserCount );//total count of user

/**
 * @swagger
 * /users/userRoles/{role}:
 *   get:
 *     summary: Get users by role
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved users by role
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/userRoles/:role",userController.getUsersByRole);//get userRoles

/**
 * @swagger
 * /users/userTypes/{userType}:
 *   get:
 *     summary: Get users by user type
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userType
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved users by user type
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/userTypes/:userType",userController.getUsersByType); //get usertype


/**
 * @swagger
 * /users/org/{orgId}:
 *   get:
 *     summary: Get users by organization ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: orgId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved users by organization ID
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */

router.get("/org/:orgId",userController.getOrgId);  //get orgid

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 required: true
 *               lastName:
 *                 type: string
 *               org_id:
 *                 type: array
 *                 items:
 *                   type: string
 *               org_name:
 *                 type: string
 *               email:
 *                 type: string
 *                 required: true
 *               password:
 *                 type: string
 *                 required: true
 *               dob:
 *                 type: string
 *                 required: true
 *               gender:
 *                 type: string
 *                 required: true
 *               address:
 *                 type: object
 *                 properties:
 *                   addressLine1:
 *                     type: string
 *                   addressLine2:
 *                     type: string
 *                   location:
 *                     type: string
 *                   postalCode:
 *                     type: number
 *               userType:
 *                 type: string
 *                 enum: [admin, lic admin, vendor, user]
 *                 default: user
 *               userRoles:
 *                 type: string
 *                 enum: [admin, lic admin, vendor, user, accountant, operator, verifier]
 *                 required: true
 *             example:
 *               firstName: John
 *               lastName: Doe
 *               org_id: [org123, org456]
 *               org_name: Organization
 *               email: john@123.com
 *               password: secret
 *               dob: 1990-01-01
 *               gender: male
 *               address:
 *                 addressLine1: 123 Main St
 *                 addressLine2: Apt 4B
 *                 location: City
 *                 postalCode: 12345
 *               userType: user
 *               userRoles: user
 *     responses:
 *       200:
 *         description: Created a new user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.post("/", userController.postUser);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retrieved a user by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

router.get("/:id",userController.getUser);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update an operator user by ID
 *     tags: [Users]
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
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               org_id:
 *                 type: array
 *                 items:
 *                   type: string
 *               org_name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               dob:
 *                 type: string
 *               gender:
 *                 type: string
 *               address:
 *                 type: object
 *                 properties:
 *                   addressLine1:
 *                     type: string
 *                   addressLine2:
 *                     type: string
 *                   location:
 *                     type: string
 *                   postalCode:
 *                     type: number
 *               userType:
 *                 type: string
 *                 enum: [admin, lic admin, vendor, user]
 *               userRoles:
 *                 type: string
 *                 enum: [admin, lic admin, vendor, user, accountant, operator, verifier]
 *               status:
 *                 type: string
 *             example:
 *               firstName: UpdatedFirstName
 *               lastName: UpdatedLastName
 *               org_id: [updatedOrgId1, updatedOrgId2]
 *               org_name: UpdatedOrganization
 *               email: updated@examplee.com
 *               password: updatedPassword
 *               dob: 1995-05-10
 *               gender: female
 *               address:
 *                 addressLine1: 123 Updated Street
 *                 addressLine2: Apt 5C
 *                 location: Updated City
 *                 postalCode: 54321
 *               userType: operator
 *               userRoles: operator
 *               status: update
 *     responses:
 *       200:
 *         description: Updated an operator user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.put("/:id",userController.putUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted a user by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
router.delete('/:id',userController.deleteUser);


module.exports = router;

  