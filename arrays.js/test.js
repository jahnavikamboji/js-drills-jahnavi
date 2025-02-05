// const elements = require('./arraysq.js');
const {each,map,reduce,find,filter,flatten} = require('./arraysq');


const items = [1, 2, 3, 4, 5, 5];
// each
// const index = each(items, (element, index) => {
// console.log(each(index));
// });
let arr = each(items, (ele,index) => `${ele} ${index}`);
console.log(arr);


//map
const square = map (items, (num) => num*num);                                                                                                                                                   
console.log(square);


reduce
const sum = reduce(num, (acc, num) => acc + num, 0);
console.log(sum);

//find
const firstOdd = find(items, num => num % 2 !== 0);
console.log(firstOdd);
  
//filter
const evenNum = filter(items, num => num % 2 === 0);
console.log(evenNum);

