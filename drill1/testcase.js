const arrayOfObjects = require('./persons');
const data = require('./persons')
const {getAllEmails,printHobbies, liveInAustralia, indexPosition, printAges, getFirstHobbies, nameAndEmail, cityAndCountry}= require('./problem1');

console.log(getAllEmails(data));
console.log(getAllEmails(arrayOfObjects));
console.log(getAllEmails());


console.log(printHobbies(data));

console.log(liveInAustralia(data));


console.log(indexPosition(data));


console.log(printAges(data));

console.log(getFirstHobbies(data));

console.log(nameAndEmail(data));

console.log(cityAndCountry(data));

