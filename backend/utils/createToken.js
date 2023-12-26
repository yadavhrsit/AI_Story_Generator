import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: 1671504000 });
};

export default createToken;
