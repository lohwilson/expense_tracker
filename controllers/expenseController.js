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
      res.status(400).json("Error" + err);
    }
  },
  async deleteOne(req, res) {
    const id = req.params.id;
    try {
      await expenseRepository.deleteOneExpense(id);
      res.status(200).json({ msg: "removed " + id });
    } catch (err) {
      res.status(400).json("Error" + err);
    }
  },
  async updateOne(req, res) {
    const id = req.params.id;
    const body = req.body;
    try {
      const result = await expenseRepository.updateOneExpense(id, body);
      res.status(200).json({ result });
    } catch (err) {
      res.status(400).json("Error" + err);
    }
  },
  async findOne(req, res) {
    try {
      const result = await expenseRepository.findOneExpense(req.params.id);
      res.status(200).json({ expense: result });
    } catch (err) {
      res.status(404).json("Error" + err);
    }
  },
};
