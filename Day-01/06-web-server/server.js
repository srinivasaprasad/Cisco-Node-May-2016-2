var http = require('http');
var server = http.createServer(function(req, res){
	console.log('A new connection is established - ', req.url);
	res.write('<h1>Welcome to node.js</h1>');
	res.end();
});
server.listen(8080);
console.log('server listening on port 8080..!');