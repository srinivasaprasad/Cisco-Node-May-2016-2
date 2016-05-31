module.exports = function(req, res){
	console.log('serving 404');
	res.statusCode = 404;
	res.end();
}