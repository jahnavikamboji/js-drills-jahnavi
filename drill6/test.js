const {counterFactory,limitFunctionCallCount,cacheFunction} = require('./closures.js');

const counter = counterFactory();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());


const helloJs =() => "Hello JavaScript";
console.log(helloJs(limitFunctionCallCount)); 
console.log(helloJs(limitFunctionCallCount));
console.log(helloJs(limitFunctionCallCount));


const cb = (x, y) => x + y;
let argumentUsed = cacheFunction(cb);
console.log(argumentUsed(4, 5));
console.log(argumentUsed(8, 3)); 
console.log(argumentUsed(2, 6)); 
console.log(argumentUsed(9, 7)); 
