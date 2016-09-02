/**
 * http://usejsdoc.org/
 */
var http = require('http');
var fs = require('fs');


http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	fs.readFile('./loginpage.html', function(err, data) {
		response.write(data);
		response.end();
	});
	
}).listen(8888);