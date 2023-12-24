import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: process.env.MAXAGE });
};

export default createToken;
