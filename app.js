//------------------------------------------------------------------------------
// Copyright (c) 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Homepage!');
    res.end();
  }

  if (req.url === '/api') {
    res.write(JSON.stringify([{ id: 1, name: 'john' }]));
    res.end();
  }
});

server.on('connection', (socket) => {
  console.log('Compiled...');
});

server.listen(3000);
console.log('Listening on port 3000...');
