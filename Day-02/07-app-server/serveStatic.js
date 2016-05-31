var path = require('path');
var fs = require('fs');

var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.json', '.txt'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
	if (isStatic(req.url.pathname)){
		var resourcePath = path.join(__dirname, req.url.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}		
		fs.createReadStream(resourcePath).pipe(res);	
	} else {
		next();
	}
};