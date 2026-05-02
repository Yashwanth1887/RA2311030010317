const Log = require('../login_middle/log');


const express = require('express');
const app = express();

app.use(express.json());

let users = [];

app.get('/', (req, res) => {
    res.send('Server is running');
});


app.get('/users', (req, res) => {
    Log("backend", "info", "handler", "get users");
    res.json(users);
});


app.post('/users', (req, res) => {
    users.push(req.body);
    Log("backend", "info", "handler", "user added"); 
    res.json({ message: "User added" });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.get('/test', (req, res) => {
    Log("backend", "error", "handler", "test log working");
    res.send("Check terminal");
});