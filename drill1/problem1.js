const arrayOfObjects = require('./persons.js');
const data  = require('./persons.js')
  

//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getAllEmails(array) {
    let emails = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].email && typeof array[i].email === "string") {
      emails.push(array[i].email);
    }else{
        console.log(`invalid email  for id ${array[i].id}`)
    }
    }
    return emails;
  }

// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function printHobbies(array){
    let hobbies = [];
    for(let i =0; i < array.length; i++ ){
        if(array[i].age === 30){ 
            hobbies.push(array[i].hobbies )
        }
    }
    return hobbies;
}
console.log(printHobbies(data));


//  Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function liveInAustralia(array){
  let country=[];
  for(let i = 0; i < array.length; i++){
    if(array[i].isStudent  && array[i].country === "Australia"){
      console.log(array[i].name);
      country.push(array[i].name)
    }
  }
  return country;
}
console.log(liveInAustralia(data));

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function indexPosition(array,n){
 for(let i=0; i < array.length; i ++){
  if(i === 2){
    console.log(`${arrayOfObjects[i].name} ${arrayOfObjects[i].city}`)
  }
 }
return `${array[n-1].name} ${array[n-1].city}` ;
}
console.log(indexPosition(data,3));

 //  Implement a loop to access and print the ages of all individuals in the dataset.
function printAges(array){
  let ages= [];
  for(key of array){
  ages.push(key.age)
  }
  return ages;
} 
console.log(printAges(data));

// Create a function to retrieve and display the first hobby of each individual in the dataset.
function getFirstHobbies(arr) {
  arr.forEach(person => {
    const firstHobby = person.hobbies[0];
    console.log(`${person.name}'s first hobby is: ${firstHobby}`);
  });
}
console.log(getFirstHobbies(data));

  
//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function nameAndEmail (array){
  let value = [];
  for(let person of arrayOfObjects){
    if(person.age === 25){
      console.log(`${person.name} : ${person.email}`)
    }
  }
 return value;
}
console.log(nameAndEmail(data));

// Implement a loop to access and log the city and country of each individual in the dataset.
function cityAndCountry(array){
let value = [];
    for(let i=0; i < array.length; i ++){
       console.log(`${arrayOfObjects[i].city} ${arrayOfObjects[i].country}`)
     }
   return value ;
   }
   console.log(cityAndCountry(data));

  
module.exports = {getAllEmails,printHobbies,liveInAustralia,indexPosition,printAges,getFirstHobbies,nameAndEmail,cityAndCountry};

