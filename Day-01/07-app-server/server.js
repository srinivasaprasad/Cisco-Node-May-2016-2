var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var querystring = require('querystring');
var calculator = require('./calculator');


var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.json', '.txt'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
	console.log('A new connection is established - ', req.url);
	var urlObj = url.parse(req.url);
	if (isStatic(urlObj.pathname)){
		var resourcePath = path.join(__dirname, urlObj.pathname);
		if (!fs.existsSync(resourcePath)){
			console.log('resource not found');
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resourcePath);
		stream.pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var reqData = querystring.parse(urlObj.query);
		var op = reqData.op,
			n1 = parseInt(reqData.n1, 10),
			n2 = parseInt(reqData.n2, 10),
			result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			var reqData = querystring.parse(rawData);
			var op = reqData.op,
				n1 = parseInt(reqData.n1, 10),
				n2 = parseInt(reqData.n2, 10),
				result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log('server listening on port 8080..!');

/*

/calculator?op=add&n1=100&n2=200

*/