const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 30,
  },
  tags: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
    minlength: 25,
    maxlength: 160,
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 500,
  },
  time: {
    type: String,
    default: '15 min read',
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  user:{
    type: String,
    required: true,
    minlength: 5,
    maxlength: 30,
  }
});

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
