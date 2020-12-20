const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expenseController");

// @route    GET /expense
// @desc     Show all expenses
// @access   Private
router.get("/", expenseController.findAll);

// @route    POST /expense
// @desc     Create an expense
// @access   Private
router.post("/", expenseController.createOne);

// @route    DELETE /expense/delete/:id
// @desc     Delete an expense
// @access   Private
router.delete("/delete/:id", expenseController.deleteOne);

// @route    PUT /expense/update/:id
// @desc     Update an expense
// @access   Private
router.put("/update/:id", expenseController.updateOne);

// @route    GET /expense/:id
// @desc     Find an expense
// @access   Private
router.get("/:id", expenseController.findOne);

module.exports = router;
