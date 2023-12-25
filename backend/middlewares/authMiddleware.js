import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET);
      req.params.userId = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ error: "Login expired" });
    }
  } else {
    res.status(401).json({ error: "You need to be logged in to view this page" });
  }
};

export default requireAuth;
