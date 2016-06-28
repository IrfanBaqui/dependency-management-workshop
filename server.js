var http = require('http');
var app = require('./app');
var server = http.createServer(app);

server.listen(8000, function() {
  console.log('listening on port 8000');
});