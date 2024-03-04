import Story from "../../models/story.js";
import User from "../../models/user.js";
import genDesc from "../../middlewares/storyDescGenerator.js";
import genTitle from "../../middlewares/storyTitleGenerator.js";

async function addStory(req, res) {
  try {
    let { tags,content } = req.body;
    let {userId} = req.params;
    const user = await User.findById(userId.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    userId = userId.id;
    const wordCount = content.split(" ").length;
    const time = `${Math.ceil(wordCount / 100)} min read`;

    const title = await genTitle(content);
    const description = await genDesc(content);

    const newStory = new Story({
      title,
      tags,
      description,
      content,
      time,
      userId
    });

    const savedStory = await newStory.save();
    res.status(201).json(savedStory);
  } catch (error) {
    res.status(500).json({ error: "Failed to add the story",error});
  }
}

export default addStory;
