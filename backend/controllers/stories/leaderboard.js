import Story from "../../models/story.js";

async function leaderboard(req, res) {
  try {
    const topStories = await Story.find()
      .sort({ "likes.length": -1, createdAt: -1 })
      .limit(5)
      .select("title createdAt user.fullname likes");

    const leaderboardStories = topStories.map((story) => {
      const formattedDate = moment(story.createdAt).format("DD/MM/YY");
      return {
        title: story.title,
        date: formattedDate,
        user: { fullname: story.user.fullname },
        numberOfLikes: story.likes.length,
      };
    });

    res.status(200).json(leaderboardStories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch top stories" });
  }
}

export default leaderboard;
