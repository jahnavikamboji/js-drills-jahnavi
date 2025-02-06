
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.
function counterFactory() {
    let count = 0;
    
    return {
        increment(){
            count ++;
            console.log("after increment:", count);
            return count;
        },
        decrement(){
            count -- ;
            console.log("after decrement:", count);
            return count;
        }
    };     
}
// const counter = counterFactory();
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter(counterFactory));
  


  function limitFunctionCallCount(cb, n) {
    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned
    let count = 0;
    return function() {
        if (count < n) {
          count++;
          return cb(this, arguments);
        } 
        return null;  
      }
   }
// const helloJs =() => "Hello JavaScript";
// console.log(helloJs(limitFunctionCallCount)); 
// console.log(helloJs(limitFunctionCallCount));
// console.log(helloJs(limitFunctionCallCount));


  
  
function cacheFunction(cb) {
    // Should return a function that invokes `cb`.
    // A cache (object) should be kept in closure scope.
    // The cache should keep track of all arguments have been used to invoke this function.
    // If the returned function is invoked with arguments that it has already seen
    // then it should return the cached result and not invoke `cb` again.
    // `cb` should only ever be invoked once for a given set of arguments.
    let cache ={};

    return function (...args) { 
        const key = JSON.stringify(args); 
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        } 
        let result = cb(...args); 
        cache[key] = result; 
        return result;
    };
}

// const cb = (x, y) => x + y;
// let argumentUsed = cacheFunction(cb);

// console.log(argumentUsed(4, 5));
// console.log(argumentUsed(8, 3)); 
// console.log(argumentUsed(2, 6)); 
// console.log(argumentUsed(9, 7)); 



module.exports = {counterFactory,
    limitFunctionCallCount,
    cacheFunction}