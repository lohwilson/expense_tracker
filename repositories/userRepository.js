const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async checkExistingUser(username) {
    let user = await User.findOne({ username });
    return user;
  },

  async registerUser(requestBody) {
    const { username, firstName, lastName, password } = requestBody;
    try {
      const user = new User({
        username,
        firstName,
        lastName,
        password,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      return user;
    } catch (err) {
      console.error(err.message);
    }
  },

  async checkUserCredentials(username, password) {
    let user = await User.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return false;
    }
    return user;
  },
};
