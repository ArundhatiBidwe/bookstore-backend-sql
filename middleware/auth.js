const jwt = require("jsonwebtoken");

// Authentication Middleware
const authenticate = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

// Role Authorization Middleware
const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Access Forbidden");
    }
    next();
  };
};

module.exports = { authenticate, authorizeRole };
