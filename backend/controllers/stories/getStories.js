const Story = require('../../models/story'); 

async function getStories(req, res) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 9;
    const skip = (page - 1) * limit;

    const stories = await Story.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch stories' });
  }
}

module.exports = { getStories };
