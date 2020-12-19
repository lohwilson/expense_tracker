const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => res.send("get user"));

// @route   POST user/register
// @desc    Register user
// @access  Public
router.post("/register", userController.registerUser);

// @route   POST user/login
// @desc    Register user
// @access  Public
router.post("/login", userController.loginUser);

module.exports = router;
