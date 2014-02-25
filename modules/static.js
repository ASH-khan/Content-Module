var path = require('path');
var fs = require('fs');

module.exports = function (request, response){

var url = request.url;
var exturl = path.extname(request.url);
var dirurl = path.dirname(request.url);
var baseurl = path.basename(request.url, [exturl])
var file_path = '';
var type = '';
	if(url === '/'){
		var file_path = 'views/index.html';
		var type = 'text/html';
	}
	// url = /views/dojo.html
	else if(exturl === '.html') {
		var type = 'text/html';
		var dirurl = 'views/';
	}
	else if(exturl === '.css')
	{
		var dirurl = 'assets/css/';
		var type = 'text/css';
	}
	else if(exturl === '.jpg' || exturl === '.png')
	{
		var dirurl = 'assets/images/';
		var type = 'image/'+exturl.substring(1);
	}
	else {
		response.end('File not found!!!');
	};
	// console.log(type);
	// console.log(file_path);
	console.log(url);
	var file_path = dirurl+baseurl;
	var file_path = path.normalize(file_path);
	// console.log(file_path);
	var whatever = function (type, file_path) {
			console.log(type);
			console.log(file_path);
			response.writeHead(200, {'Content-type': type});
			fs.readFile(file_path, function(errors, contents){
				if (errors) throw (errors);
				response.write(contents);
				response.end();
				});
		// }
		}
	return whatever(type, file_path);
}
