const {keys,values,mapObject,pairs,invert,defaults} = require('./problem.js');

const testObject = { 
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham" }; 

console.log(keys(testObject));

console.log(values(testObject));


function returnInUpperCase(data){
    if(typeof data =="string"){
      return data.toUpperCase();
    }
    return data;
  }
console.log(mapObject(testObject,returnInUpperCase));



console.log(pairs(testObject));

console.log(invert(testObject));


console.log(defaults(testObject));
