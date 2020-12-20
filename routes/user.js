const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => res.send("get user"));

// @route   POST user/register
// @desc    Register user
// @access  Public
router.post("/register", userController.register);

// @route   POST user/login
// @desc    Register user
// @access  Public
router.post("/login", userController.login);

module.exports = router;
