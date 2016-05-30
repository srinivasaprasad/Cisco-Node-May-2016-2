//create an accumulator object

var accFactory = require('./accumulator');
var accumulator = accFactory();

accumulator.add(100);
accumulator.subtract(50);
accumulator.multiply(10);
accumulator.divide(2);
console.log(accumulator.getResult()); //=> 250

// var acc1 = require('./accumulator')();
// acc1.add(100);
// acc1.multiply(5);
// console.log(acc1.getResult());  //=> 500
// var acc2 = require('./accumulator')();
// console.log(acc2.getResult())  //=> 0