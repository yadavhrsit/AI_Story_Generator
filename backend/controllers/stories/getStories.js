import Story from "../../models/story.js";
import User from "../../models/user.js";
import moment from "moment";

async function getStories(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("userId", "fullname avatar");

    const updatedStories = stories.map((story) => {
      const liked = story.likes.some((like) =>
        like.userId.equals(req.params.userId.id)
      );

      const formattedDate = moment(story.createdAt).format("DD/MM/YY");
      const formattedTime = moment(story.createdAt).format("HH:mm");

      return {
        ...story._doc,
        liked,
        date_created: formattedDate,
        time_created: formattedTime,
      };
    });

    res.status(200).json(updatedStories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stories" });
  }
}

export default getStories;
