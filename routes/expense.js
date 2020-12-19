const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

// @route    GET /expense
// @desc     Show all expenses
// @access   Private
router.get("/", expenseController.findAllExpense);

// @route    POST /expense
// @desc     Create an expense
// @access   Private
router.post("/", expenseController.createExpense);

module.exports = router;
