var http = require('http');
var fs = require('fs');

var static_contents = require('./modules/static.js');

server = http.createServer(function (request, response){
	static_contents(request, response);
});
server.listen(8000);