import Story from "../../models/story.js";
import mongoose from "mongoose";
import moment from "moment";

async function getStoriesByUser(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;
    const userId = new mongoose.Types.ObjectId(req.params.userId.id);

    const stories = await Story.find({ userId: userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const updatedStories = stories.map((story) => {
      const formattedDate = moment(story.createdAt).format("DD/MM/YY");
      const formattedTime = moment(story.createdAt).format("HH:mm");

      return {
        ...story._doc,
        user: "You",
        date_created: formattedDate,
        time_created: formattedTime,
      };
    });

    setTimeout(() => {
      res.status(200).json(updatedStories);
    }, 2000);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch stories" });
  }
}

export default getStoriesByUser;
