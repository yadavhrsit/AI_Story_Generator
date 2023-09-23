const { validationResult } = require('express-validator');
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const createToken = require('../../utils/createToken');

const signUp = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
    });

    let createdUser = await newUser.save();
    const token = createToken(createdUser._id);
    res.cookie('jwt',token,{httpOnly:true,maxAge:process.env.MAXAGE*1000})
    res.status(201).json({ message: "User registered successfully",user:createdUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = signUp;
