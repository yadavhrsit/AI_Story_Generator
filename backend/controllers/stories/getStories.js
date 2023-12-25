import Story from "../../models/story.js";
import moment from "moment";

async function getStories(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const updatedStories = stories.map((story) => {
      const liked = story.likes.some((like) =>
        like.userId.equals(req.params.userId.id)
      );

      const formattedDate = moment(story.createdAt).format("DD/MM/YY");
      const formattedTime = moment(story.createdAt).format("HH:mm");

      return {
        ...story._doc,
        liked,
        date: formattedDate,
        time: formattedTime,
      };
    });

    res.status(200).json(updatedStories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stories" });
  }
}

export default getStories;
