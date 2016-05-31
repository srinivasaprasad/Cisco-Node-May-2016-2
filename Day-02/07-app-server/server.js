var http = require('http'),
	path = require('path'),
	chalk = require('chalk');

var dataParser = require('./dataParser');
var serveStatic = require('./serveStatic.js');
var calculatorHandler = require('./calculatorHandler');
var notFoundHandler = require('./notFoundHandler');
var app = require('./app');

app.use(dataParser);
app.use(serveStatic(path.join(__dirname, './public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);

console.log(chalk.red('server listening on port 8080..!'));

