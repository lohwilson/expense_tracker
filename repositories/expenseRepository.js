const Expense = require("../models/Expense");

module.exports = {
  async findAllExpense() {
    try {
      return await Expense.find();
    } catch (err) {
      res.status(400).json("Error" + err);
    }
  },
  async createOneExpense(requestBody) {
    const { date, type, description, amount, currency, image } = requestBody;

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
      return response;
    } catch (err) {
      console.log(err);
    }
  },
  async deleteOneExpense(id) {
    try {
      await Expense.findByIdAndDelete(id);
      return;
    } catch (err) {
      console.log(err);
    }
  },
  async updateOneExpense(name, expense) {
    console.log(name, expense);
  },
  async findOneExpense() {},
};
