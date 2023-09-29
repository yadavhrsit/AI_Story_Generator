const Story = require('../../models/story'); 
const User = require('../../models/user');  

async function addStory(req, res) {
  try {
    const { title, tags, description, content, userId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const userFullname = user.fullname;

    const newStory = new Story({
      title,
      tags,
      description,
      content,
      userId, 
      user: userFullname,
    });

    const savedStory = await newStory.save();

    res.status(201).json(savedStory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add the story' });
  }
}

module.exports = { addStory };
