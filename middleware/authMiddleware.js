const jwt = require("jsonwebtoken");
const createResponse = require("../utils/responseUtils");

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json(createResponse("Authorization token is required", null, true));
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("JWT verification error:", err);
      return res.status(403).json(createResponse("Invalid or expired token", null, true));
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
