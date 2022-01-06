//------------------------------------------------------------------------------
// Copyright (c) 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware function to accept JSON in request body
app.use(express.static('public')); // Middleware function to serve static files

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Sarah' },
];

// GET Requests
app.get('/', (req, res) => {
  res.send('Hello Homepage!');
});

app.get('/api/users', (req, res) => {
  res.send(JSON.stringify(users));
});

app.get('/api/users/:id', (req, res) => {
  let user = users.find((u) => u.id === Number(req.params.id));
  if (!user) {
    res.status(404).send('Error 404: User not found');
  } else {
    res.send(user);
  }
});

// POST Requests
app.post('/api/users', (req, res) => {
  if (req.body.name) {
    let user = {
      id: users.length + 1,
      name: req.body.name,
    };

    users.push(user);
    res.send(user);
  } else {
    res.status(400).send('Error 400: User name is not exists');
  }
});

// PUT Requests
app.put('/api/users/:id', (req, res) => {
  let user = users.find((user) => user.id === Number(req.params.id));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    user.name = req.body.name;
    res.send(users);
  }
});

// DELETE Requests
app.delete('/api/users/:id', (req, res) => {
  let user = users.find((user) => user.id === Number(req.params.id));
  if (!user) {
    res.status(404).send('User not found');
  } else {
    let index = users.indexOf(user);
    users.splice(index, 1);
    res.send(users);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
