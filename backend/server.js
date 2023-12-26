import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import requireAuth from './middlewares/authMiddleware.js';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8100;

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

app.get('/story', requireAuth, (req, res) => {
    const userData = req.user.id;
    res.json({ userId: userData });
});

import authRouter from './routes/authRoutes.js';
import storyRouter from './routes/storyRoutes.js';
app.use('/auth', authRouter);
app.use('/story', storyRouter);
app.get('/', ()=>{
    res.status(200).json("Server Running");
});

mongoose.connect(process.env.DB).then(() => {
    console.log("MongoDB Connected");
}).catch(() => {
    console.log("MongoDB Failed to connect");
});

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});
