var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;
var server = http.createServer((request, responce) => {
  responce.statusCode = 200;
  responce.setHeadder('Content-type', 'text/plain');
  responce.end('hello world!')
})

server.listen(port);