// // middleware/authMiddleware.js
// const jwt = require("jsonwebtoken");

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.status(401).json({ error: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // You can access user ID with req.user.id
//     next();
//   } catch (err) {
//     res.status(403).json({ error: "Invalid or expired token." });
//   }
// }

// module.exports = authenticateToken;
