const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.get("/", (req, res) => res.send("get user"));

// @route   POST user/register
// @desc    Register user
// @access  Public
router.post("/register", async (req, res) => {
  console.log(req.body);
  const { username, firstName, lastName, password } = req.body;

  if (!username || !firstName || !lastName || !password) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Username already exists" }] });
    }
    user = new User({
      username,
      firstName,
      lastName,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST user/login
// @desc    Register user
// @access  Public
router.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }
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
});

module.exports = router;
