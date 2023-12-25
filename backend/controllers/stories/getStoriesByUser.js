import Story from "../../models/story.js";
import mongoose from "mongoose";
async function getStoriesByUser(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;
    const userId = new mongoose.Types.ObjectId(req.params.userId.id);
    const stories = await Story.find({userId:userId})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    setTimeout(() => {
      res.status(200).json(stories);
    }, 2000);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to fetch stories" });
  }
}

export default getStoriesByUser;
