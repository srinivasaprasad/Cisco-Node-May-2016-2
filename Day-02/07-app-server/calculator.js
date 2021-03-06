// create 'calculator.js'

// create a calculator object with the following methods
// 	- add(x,y)
// 	- subtract(x,y)
// 	- multiply(x,y)
// 	- divide(x,y)

// Run all the above methods for x = 100 and y=200 and print the results

var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	},
};

module.exports = calculator;