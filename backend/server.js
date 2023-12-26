import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import serverless from 'serverless-http';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8100;
const router = express.Router();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.get('/', (req, res) => {
    res.send('Server is Running');
});

import authRouter from './routes/authRoutes.js';
import storyRouter from './routes/storyRoutes.js';
app.use('/auth', authRouter);
app.use('/story', storyRouter);

mongoose.connect(process.env.DB).then(() => {
    console.log("MongoDB Connected");
}).catch(() => {
    console.log("MongoDB Failed to connect");
});

app.use('/.netlify/functions/api',router)

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});
export const handler = serverless(app);
