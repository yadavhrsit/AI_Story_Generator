import Story from '../../models/story.js'; 

async function getStory(req, res) {
  try {
    const storyId = req.params.id;

    const story = await Story.findById(storyId);

    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the story' });
  }
}

export default getStory;
