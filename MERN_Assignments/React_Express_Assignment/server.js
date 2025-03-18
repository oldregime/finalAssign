
const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let users = [];

app.get('/welcome', (req, res) => {
    res.json({ message: 'Welcome to Express!' });
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    users = users.map(user => user.id === id ? updatedUser : user);
    res.json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter(user => user.id !== id);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
