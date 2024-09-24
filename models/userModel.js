const db = require("../config/db");

const User = {
  register: (userData, callback) => {
    const query = "INSERT INTO users (username, password, email, created_at) VALUES (?, ?, ?, NOW())";
    db.query(query, [userData.username, userData.password, userData.email], callback);
  },

  login: (username, callback) => {
    const query = "SELECT * FROM users WHERE username = ?";
    db.query(query, [username], callback);
  },
};

module.exports = User;
