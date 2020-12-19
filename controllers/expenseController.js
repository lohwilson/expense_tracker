const Expense = require("../models/Expense");

module.exports = {
  async findAllExpense(req, res) {
    try {
      const allExpenses = await Expense.find();
      await res.json(allExpenses);
    } catch (err) {
      res.status(400).json("Error" + err);
    }
  },
  async createExpense(req, res) {
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
  },
};
