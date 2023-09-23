const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        try {
            const decodedToken = jwt.verify(token,process.env.SECRET);
            req.user = decodedToken; 
            next();
        } catch (err) {
            res.status(401).json({ error: 'Token is invalid or expired' });
        }
    } else {
        res.status(401).json({ error: 'No token provided' });
    }
};

module.exports = requireAuth;
