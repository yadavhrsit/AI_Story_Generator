import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 60,
  },
  tags: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
    minlength: 25,
    maxlength: 600,
  },
  content: {
    type: String,
    required: true,
    minlength: 1000,
    maxlength: 5000,
  },
  time: {
    type: String,
    default: "2 min read",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  likes: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
},{ timestamps: true });

const Story = mongoose.model("Story", storySchema);

export default Story;
