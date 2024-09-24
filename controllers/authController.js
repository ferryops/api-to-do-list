const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const createResponse = require("../utils/responseUtils");

const JWT_SECRET = process.env.JWT_SECRET;

// Register user
exports.register = (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  User.register({ username, password: hashedPassword, email }, (err, result) => {
    if (err) {
      return res.status(500).json(createResponse("Error registering user", null, true));
    }
    res.status(201).json(createResponse("User registered successfully", result, false));
  });
};

// Login user
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json(createResponse("Username and password are required", null, true));
  }

  User.login(username, (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json(createResponse("Internal server error", null, true));
    }

    if (results.length === 0) {
      return res.status(400).json(createResponse("Invalid username or password", null, true));
    }

    const user = results[0];
    const isValidPassword = bcrypt.compareSync(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json(createResponse("Invalid username or password", null, true));
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json(createResponse("Login successful", { token }, false));
  });
};
