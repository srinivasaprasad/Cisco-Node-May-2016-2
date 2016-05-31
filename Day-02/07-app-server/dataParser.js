var url = require('url');
var querystring = require('querystring');

module.exports = function(req, res, next){
	req.url = url.parse(req.url);
	req.query = querystring.parse(req.url.query);
	if (req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});
		req.on('end', function(){
			req.body = querystring.parse(rawData);
			next();
		});

	} else {
		next();
	}

}