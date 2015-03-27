var http = require('http');

http.createServer(function (req, res) {
    res.end('hello world!');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');