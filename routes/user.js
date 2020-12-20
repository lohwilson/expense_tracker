const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// @route   GET user/:id
// @desc    Get user
// @access  Public
router.get("/:id", userController.getUser);

// @route   POST user/register
// @desc    Register user
// @access  Public
router.post("/register", userController.register);

// @route   POST user/login
// @desc    Register user
// @access  Public
router.post("/login", userController.login);

module.exports = router;
