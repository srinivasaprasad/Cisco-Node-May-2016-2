var querystring = require('querystring');
var calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.url.pathname === '/calculator'){
		var data = req.method === 'POST' ? req.body : req.query;
		data = data || {};
		var op = data.op,
			n1 = parseInt(data.n1, 10),
			n2 = parseInt(data.n2, 10);
		if (op){
			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();
		} else {
			res.statusCode = 400;
			res.end();
		}
		
	} else {
		next();
	}
}