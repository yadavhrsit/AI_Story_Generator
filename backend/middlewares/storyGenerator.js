const Bard = import('bard-ai');

async function generateStory(req,res) {
  const response = await Bard.generate({
    text: `Write a short story based on the title: ${req.query.title}`,
    format: "story"
  });
  res.status(200).json(response);
}

module.exports = generateStory;