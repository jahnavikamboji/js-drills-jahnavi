const inventory = require('./cars.js');
const users = require('./cars.js');

// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
  ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");
  function carId33(data){
    for(let car of data){
        if(car.id === 33){
            return `${car.id} is a ${car.car_make} year ${car.car_year}  model ${car.car_model}`
        }
    }
  }
console.log(carId33(inventory));

// ==== Problem #2 ====
  // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
  ("Last car is a *car make goes here* *car model goes here*");
  function lastCar(data){
    let lastOne = data[data.length -1];
    return `last car is a ${lastOne.car_model} model ${lastOne.car_make}`
  }
  console.log(lastCar(inventory));

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
function carsModels(data){
    let carNames = [];
    for(let car of data){
        carNames += car.car_model + " ";
    }
    return carNames.split(" ").sort().join(" ");
}
console.log(carsModels(inventory));

  // ==== Problem #4 ====
  // The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function carYears(data){
    let years = [ ];
    for(let car of data){
        years.push(car.car_year);
    }
    return years; 
}
console.log(carYears(inventory));

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
function olderThan2000(data){
    let year = 0;
    for (let car of data){
        if(car.car_year >2000){
            year++;
        }
    }
    return year;
}  
console.log(olderThan2000(inventory));

  // ==== Problem #6 ====
  // A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
function bmwAndAudi(data){
    let BMWAndAudi=[];
    for(let car of data){
       
        if(car.car_make == "BMW" || car.car_make == "Audi"){
            BMWAndAudi.push(JSON.stringify(car));
        }
    }

    return BMWAndAudi;
}
console.log(bmwAndAudi(inventory));

  module.exports =  {carId33,
    lastCar,
    carsModels,
    carYears,
    olderThan2000,
    bmwAndAudi
  }