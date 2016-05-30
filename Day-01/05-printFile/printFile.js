var fs = require('fs');

// var fileContents = fs.readFileSync('./test.txt', {encoding : 'utf8'});
// console.log(fileContents);

/*
fs.readFile('./test.txt', {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong - ', err);
		return;
	}
	console.log(fileContents);
	console.log('----------------- EOF --------------');
});
*/


/*
var stream = fs.createReadStream('./test.txt', {encoding : 'utf8'});
//open, data, close, end, error

var readCount = 0;
stream.on('data', function(chunk){
	console.log(chunk);
	++readCount;
});
stream.on('end', function(){
	console.log('----------------- EOF --------------');
	console.log('readCount -> ', readCount);
});
*/


var stream = fs.createReadStream('./test.txt', {encoding : 'utf8'});
stream.pipe(process.stdout);


