import genStory from '../../middlewares/storyGenerator.js';
import genDesc from '../../middlewares/storyDescGenerator.js';
import genTitle from '../../middlewares/storyTitleGenerator.js';

async function generateStory(req,res){
    try {
        const { prompt,tags } = req.body;
        const content = await genStory(prompt,tags);
        const title = await genTitle(content);
        const description = await genDesc(content);
        res.status(200).json({content,title,description});
    } catch (error) {
        res.status(500).json({ error: 'Failed to Generate the story' });
    }
}
export default generateStory;