var http = require('http');

var dataParser = require('./dataParser');
var serveStatic = require('./serveStatic.js');
var calculatorHandler = require('./calculatorHandler');
var notFoundHandler = require('./notFoundHandler');

var server = http.createServer(function(req, res){
	console.log('A new connection is established - ', req.url);
	dataParser(req,res);
	serveStatic(req, res);
	calculatorHandler(req, res);
	notFoundHandler(req, res);
});
server.listen(8080);
console.log('server listening on port 8080..!');

