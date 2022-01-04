//------------------------------------------------------------------------------
// Copyright (c) 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello Homepage!');
});

app.get('/api', (request, response) => {
  response.send(JSON.stringify([{ id: 1, name: 'john' }]));
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
