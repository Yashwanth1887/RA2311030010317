const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// ADD THIS 👇 (fix)
app.get('/', (req, res) => {
    res.send('Server is running');
});

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// POST add user
app.post('/users', (req, res) => {
    users.push(req.body);
    res.json({ message: "User added" });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});