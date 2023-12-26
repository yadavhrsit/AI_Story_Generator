import User from "../../models/user.js";
import mongoose from "mongoose";
const updateProfileController = async (req, res) => {
  const { fullname, email, password } = req.body;
  const userId = new mongoose.Types.ObjectId(req.params.userId.id);
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (fullname) {
      user.fullname = fullname;
    }
    if (email) {
      user.email = email;
    }
    if (password) {
      user.password = password;
    }

    await user.save();

    return res
      .status(200)
      .json({ message: "Profile updated successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to update profile", error: error.message });
  }
};

export default updateProfileController;
