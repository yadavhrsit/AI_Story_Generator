import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8100;

app.use(express.json());
app.use(cookieParser());


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

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});
