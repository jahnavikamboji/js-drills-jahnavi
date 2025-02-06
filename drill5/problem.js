const testObject = { 
    name: "Bruce Wayne",
    age: 36,
    location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

function keys(obj) {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#
  let result =[];
  for (let key in obj) {
      obj.key ;
      result.push(key);
    }
  return result;
}
// console.log(keys(testObject));



function values(obj) {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
    let result = [];   
    for (let key in obj) {
      if (typeof obj[key] !== 'function') {
        result.push(obj[key]);
      }
    }
    return result;
  }
// console.log(values(testObject));

function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject
    const result = {};
    for (let key in obj) {
      result[key] = cb(obj[key]);
    }
  
    return result;
  }
  


  
function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  let result = [];
  for (let key in obj){
    result.push([key, obj[key]]);
  }
  return result;
}
// console.log(pairs(testObject));




/* STRETCH PROBLEMS */

function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  let res =[];
  for (let key in obj) {
    res.push(obj[key] , key);
  }
  return res;
}
// console.log(invert(testObject));

function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  
    for (let key in defaultProps) {
    
      if (obj[key] === undefined) {
        obj[key] = defaultProps[key];
      }
    }
    return obj; 
  }



module.exports ={
    keys,
    values,
    mapObject,
    pairs,
    invert,
    defaults
}