//------------------------------------------------------------------------------
// Copyright (c) 2022. Anas Abu Farraj.
//------------------------------------------------------------------------------
const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(msg) {
    console.log(msg);

    // Raise an event
    this.emit('messageLogged', { code: 403, endpoint: 'https://localhost' });
  }
}

module.exports = Logger;
