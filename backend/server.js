const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 8100;
const requireAuth = require('./middlewares/authMiddleware');

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Server is Running')
});

app.get('/story',requireAuth, (req, res) => {
    const userData = req.user.id;
    res.json({ userId: userData });
})


const authRouter = require('./routes/authRoutes');
app.use('/auth', authRouter);

mongoose.connect(process.env.DB).then(() => {
    console.log("MongoDB Connected")
}).catch(() => {
    console.log("MongoDB Failed to connect");
})

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});