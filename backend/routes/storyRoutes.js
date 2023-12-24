import express from "express";
const storyRouter = express.Router();

import generateStory from "../controllers/stories/generateStory.js";
import addStory from "../controllers/stories/addStory.js";
import deleteStory from "../controllers/stories/deleteStory.js";
import getStory from "../controllers/stories/getStory.js";
import getStories from "../controllers/stories/getStories.js";
import getStoriesByUser from "../controllers/stories/getStoriesByUser.js";
import requireAuth from "../middlewares/authMiddleware.js";

storyRouter.post("/genstory", requireAuth, generateStory);
storyRouter.post("/add", requireAuth, addStory);
storyRouter.delete("/delstory", requireAuth, deleteStory);
storyRouter.get("/view/:id",  getStory);
storyRouter.get("/stories", getStories);
storyRouter.get("/userstories", requireAuth, getStoriesByUser);
 
export default storyRouter;
