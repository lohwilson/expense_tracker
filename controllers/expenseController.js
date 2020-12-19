const Expense = require("../models/Expense");
const expenseRepository = require("../repositories/expenseRepository");

module.exports = {
  async findAll(req, res) {
    try {
      const allExpenses = await expenseRepository.findAllExpense();
      await res.json(allExpenses);
    } catch (err) {
      res.status(400).json("Error" + err);
    }
  },
  async createOne(req, res) {
    try {
      const expense = await expenseRepository.createOneExpense(req.body);
      await res.json({ expense: expense });
    } catch (err) {
      console.log(err);
    }
  },
  async deleteOne(req, res) {
    const id = req.params.id;
    try {
      await expenseRepository.deleteOneExpense(id);
      res.status(200).json({ msg: "removed " + id });
    } catch (err) {
      console.log(err);
    }
  },
  async updateOne(req, res) {
    const { date, type, description, amount, currency, image } = req.body;
    try {
      const expense = {
        date,
        type,
        description,
        amount,
        currency,
        image,
      };
      await expenseRepository.updateOneExpense(req.params.name, expense);
      return console.log(expense);
    } catch (err) {
      console.log(err);
    }
  },
  async findOne(req, res) {
    res.send("findOne");
  },
};
