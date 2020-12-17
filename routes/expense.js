const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// @route    GET /expense
// @desc     Show all expenses
// @access   Private
router.get("/", async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    await res.json(allExpenses);
  } catch (err) {
    res.status(400).json("Error" + err);
  }
});

// @route    POST /expense
// @desc     Create an expense
// @access   Private
router.post("/", async (req, res) => {
  const { date, type, description, amount, currency, image } = req.body;

  const expense = new Expense({
    date,
    type,
    description,
    amount,
    currency,
    image,
  });

  try {
    const response = await expense.save();
    await res.json({ expense: response });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
