//------------------------------------------------------------------------------
// Copyright (c) 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('Hello Homepage!');
});

app.get('/api/users', (request, response) => {
  response.send(
    JSON.stringify([
      { id: 1, name: 'john' },
      { id: 2, name: 'peter' },
    ])
  );
});

app.get('/api/users/:id', (request, response) => {
  response.send(request.params.id);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
