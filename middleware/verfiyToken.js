const jwt = require("jsonwebtoken");

const verfiyToken = (req, res, next) => {
  const authHeader =
    req.headers["Authorization"] || req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ errorMessage: "token is required" });

    }
  const token = authHeader.split(" ")[1];

  try {
    const currentUser = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //currentUser is the decoded JWT token
    req.currentUser = currentUser;
    next();
  } catch (error) {
    return res.status(401).json({ errorMessage: "invalid token" });
  }
};

module.exports = verfiyToken;
