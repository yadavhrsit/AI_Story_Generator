import genStory from '../../middlewares/storyGenerator.js';


async function generateStory(req,res){
    try {
        const { prompt,tags } = req.body;
        const content = await genStory(prompt,tags);
        res.status(200).json({content});
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Failed to Generate the story' });
    }
}
export default generateStory;