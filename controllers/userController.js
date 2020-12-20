const jwt = require("jsonwebtoken");
const userRepository = require("../repositories/userRepository");

module.exports = {
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
    let user;
    const checkCredentials = await userRepository.checkUserCredentials(
      username,
      password
    );
    if (!checkCredentials) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    } else {
      user = checkCredentials;
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
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
};
