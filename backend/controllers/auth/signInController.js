const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const createToken = require('../../utils/createToken');
const User = require('../../models/user');

const signIn = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ message: 'Unregistered Email' });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Wrong Password' });
    }

    const token = createToken(existingUser._id);

    res.cookie('jwt', token, { httpOnly: true, maxAge: process.env.MAXAGE * 1000 });

    res.status(200).json({ message: 'User signed in successfully', user: existingUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = signIn;
