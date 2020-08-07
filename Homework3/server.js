var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url')
var adr = 'http://localhost.8080/default.htm?'
var q = url.parse(adr,true);

http.createServer(function(request, response) {
    var q = url.parse(require.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      return response.end("404 Not Found");
    }
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    return response.end();
  });
}).listen(8080);
