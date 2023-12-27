import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

const allowedOrigin = "https://ai-story-generator.vercel.app";

app.use(cors({ origin: allowedOrigin }));

app.get('/', (req, res) => {
    res.send('Server is Running');
});


import authRouter from './routes/authRoutes.js';
import storyRouter from './routes/storyRoutes.js';
app.use('/auth', authRouter);
app.use('/story', storyRouter);


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})

// mongoose.connect(process.env.DB).then(() => {
//     console.log("MongoDB Connected");
//     app.listen(PORT, () => {
//         console.log(`Server Started on Port ${PORT}`);
//     });
// }).catch(() => {
//     console.log("MongoDB Failed to connect");
// });

