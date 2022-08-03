const express = require('express');
const { registerUser, loginUser } = require('../controllers/user.controller');
const router = express.Router();


/// Register User
router.route("/register").post(registerUser)

/// Login User
router.route("/login").post(loginUser)

module.exports = router;