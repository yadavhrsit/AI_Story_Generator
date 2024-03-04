import User from '../../models/user.js';
import { validationResult } from 'express-validator';
import createToken from '../../utils/createToken.js';
import uploadAvatar from '../../utils/uploadAvatar.js';
import bcrypt from 'bcrypt';

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

    if (req.file) {
      console.log("File found: Trying to upload");
      await uploadAvatar(req.file,email);
    } else {
      console.log("No file found in the request");
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullname,
      email,
      password: hashedPassword,
      avatar :`https://storage.googleapis.com/profile_uploads/${email}`,
    });

    let createdUser = await newUser.save();
    const token = createToken(createdUser._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 1671504000 });
    res
      .status(201)
      .json({ message: "User registered successfully", user: createdUser._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export default signUp;
