import Story from "../../models/story.js";
import User from "../../models/user.js";
import mongoose from "mongoose";

async function likeOrUnlikeStory(req, res) {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId.id);
    const storyId = new mongoose.Types.ObjectId(req.params.storyId);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    let story = await Story.findById(storyId);
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }

    const alreadyLikedIndex = story.likes.findIndex((like) =>
      like.userId.equals(userId)
    );

    if (alreadyLikedIndex !== -1) {
      story.likes.splice(alreadyLikedIndex, 1);
      await story.save();
      return res.status(200).json("Unliked");
    } else {
      story.likes.push({ userId });
      await story.save();
      return res.status(200).json("Liked");
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to like/unlike the story", error });
  }
}

export default likeOrUnlikeStory;
