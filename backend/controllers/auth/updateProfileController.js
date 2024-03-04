import User from "../../models/user.js";
import mongoose from "mongoose";
import {Storage} from '@google-cloud/storage';
import bcrypt from 'bcrypt';
import uploadAvatar from "../../utils/uploadAvatar.js";

const updateProfileController = async (req, res) => {
  const { fullname, email, password } = req.body;
  const userId = new mongoose.Types.ObjectId(req.params.userId.id);
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (fullname && fullname !== user.fullname) {
      user.fullname = fullname;
    }
    
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      if (hashedPassword !== user.password) {
        user.password = hashedPassword;
      }
    }

    if (req.file) {
        await uploadAvatar(req.file,email);
        user.avatar = `https://storage.googleapis.com/profile_uploads/${user.email}`;
    } else {
      console.log("No file found in the request");
    }
    
    if (user.isModified()) {
      const updatedUser = await user.save();
      return res
        .status(200)
        .json({ message: "Profile updated successfully", user: updatedUser });
    } else {
      return res.status(400).json({ message: "Nothing to Update", user });
    }

  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};

export default updateProfileController;
