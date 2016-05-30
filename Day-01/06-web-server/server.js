var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function(req, res){
	console.log('A new connection is established - ', req.url);
	var resourcePath = path.join(__dirname, req.url);
	if (!fs.existsSync(resourcePath)){
		console.log('resource not found');
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resourcePath);
	stream.pipe(res);
});
server.listen(8080);
console.log('server listening on port 8080..!');

/*
res.statusCode = 404;
res.end()  
*/