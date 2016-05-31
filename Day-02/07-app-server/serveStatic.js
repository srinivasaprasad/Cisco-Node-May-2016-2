var path = require('path');
var fs = require('fs');

var staticResExtns = ['.html', '.css', '.js', '.jpg', '.png', '.ico', '.xml', '.json', '.txt'];
function isStatic(resource){
	return staticResExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.url.pathname)){
		var resourcePath = path.join(__dirname, req.url.pathname);
		if (!fs.existsSync(resourcePath)){
			console.log('resource not found');
			res.statusCode = 404;
			res.end();
			return;
		}
		console.log('resource found - serving resource');
		var stream = fs.createReadStream(resourcePath);
		/*
		stream.pipe(res);
		*/
		stream.on('open', function(){
			console.log('start serving static resource');
		});
		stream.on('data', function(chunk){
			console.log('serving static resource chunk');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('finished writing static resource to res');
			res.end();
		});
	}
};