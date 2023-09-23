const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();
const createToken = (id) =>{
    return jwt.sign({id},process.env.SECRET,{expiresIn:process.env.MAXAGE})
}
module.exports = createToken;