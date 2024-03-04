import Story from "../../models/story.js";
import moment from "moment";

async function leaderboard(req, res) {
  try {
    const topStories = await Story.aggregate([
      {
        $project: {
          title: 1,
          createdAt: 1,
          userId: 1,
          likes: 1,
          numberOfLikes: { $size: '$likes' }
        }
      },
      { $sort: { numberOfLikes: -1, createdAt: -1 } },
      { $limit: 5 }
    ]);

    const populatedStories = await Promise.all(
      topStories.map(async (story) => {
        const formattedDate = moment(story.createdAt).format("DD/MM/YY");

        const populatedStory = await Story.populate(story, {
          path: "userId",
          select: "fullname avatar",
        });

        return {
          id: populatedStory._id,
          title: populatedStory.title,
          date: formattedDate,
          user: populatedStory.userId,
          numberOfLikes: populatedStory.numberOfLikes,
        };
      })
    );

    res.status(200).json(populatedStories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch top stories" });
  }
}

export default leaderboard;
