var app;

require('sugar');

app = require('./app');

app.start();

console.log('started app!');

require('./auth');
