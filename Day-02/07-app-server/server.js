var http = require('http');

var dataParser = require('./dataParser');
var serveStatic = require('./serveStatic.js');
var calculatorHandler = require('./calculatorHandler');
var notFoundHandler = require('./notFoundHandler');
var app = require('./app');

app.use(dataParser);
app.use(serveStatic);
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);

console.log('server listening on port 8080..!');

