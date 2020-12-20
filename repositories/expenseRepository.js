const Expense = require("../models/Expense");

module.exports = {
  async findAllExpense() {
    try {
      return await Expense.find();
    } catch (err) {
      return err;
    }
  },
  async createOneExpense(body) {
    const { date, type, description, amount, currency, image } = body;

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
  async updateOneExpense(id, body) {
    const { date, type, description, amount, currency, image } = body;

    try {
      const response = await Expense.findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            date,
            type,
            description,
            amount,
            currency,
            image,
          },
        }
      );
      return response;
    } catch (err) {
      return err;
    }
  },
  async findOneExpense(id) {
    const response = await Expense.findOne({ _id: id });
    return response;
  },
};
