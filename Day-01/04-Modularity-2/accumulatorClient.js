//create an accumulator object

var accFactory = require('./accumulator');
var accumulator = accFactory();

accumulator.add(100);
accumulator.subtract(50);
accumulator.multiply(10);
accumulator.divide(2);
console.log(accumulator.getResult()); //=> 250