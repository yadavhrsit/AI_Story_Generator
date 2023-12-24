import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET);
      req.body.userId = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ error: "Token is invalid or expired" });
    }
  } else {
    res.status(401).json({ error: "No token provided" });
  }
};

export default requireAuth;
