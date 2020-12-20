const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

module.exports = {
  async getUser(req, res) {
    try {
      const user = await userRepository.findUser(req.params.id);
      return res.status(200).json({ user });
    } catch (err) {
      console.log(err);
    }
  },
  async register(req, res) {
    const { username, firstName, lastName, password } = req.body;

    if (!username || !firstName || !lastName || !password) {
      return res.status(400).json({ error: "Please enter all fields" });
    }

    const existingUser = await userRepository.checkExistingUser(username);
    if (existingUser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Username already exists" }] });
    }

    try {
      console.log("try");
      const response = await userRepository.registerUser(req.body);
      await res.json(response);
    } catch (err) {
      console.log(err);
      res.status(500).send("Server error");
    }
  },

  async login(req, res) {
    console.log(req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: "Please enter all fields" });
    }
    const user = await userRepository.checkUserCredentials(username, password);
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    try {
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "5 days",
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token, user });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
};
