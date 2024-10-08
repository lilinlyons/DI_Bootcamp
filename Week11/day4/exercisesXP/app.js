// app.js

const express = require('express');
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');

const authMiddleware = require('./authMiddleware');

const router = require('./auth');

app.use(router)

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, JWT Authentication!');
});


app.get('/profile', authMiddleware, (req, res) => {
    // Access the authenticated user's information via req.user
    res.json({ message: `Welcome, ${req.user.username}!` });
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});