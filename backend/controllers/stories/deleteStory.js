import Story from '../../models/story.js'; 

async function deleteStory(req, res) {
  try {
    const storyId = req.body.id;
    const deletedStory = await Story.findByIdAndRemove(storyId);

    if (!deletedStory) {
      return res.status(404).json({ error: 'Story not found' });
    }

    res.status(200).json({ message: 'Story deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the story' });
  }
}

export default deleteStory;
