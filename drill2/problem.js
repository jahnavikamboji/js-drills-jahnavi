const users = require('./users.js');
// const data  = require('./users.js');

// Q1 Find all users who are interested in playing video games.
function playingVideoGames(data){
    for(let user in data){
        for(let intrest of data[user].interests){
            if(intrest.includes("Video Games")){
                console.log(`${user}: intrested in video games`);
            }
        }
    }
}
playingVideoGames(users);

// Q2 Find all users staying in Germany.
function stayingInGermany(data){
   for(let user in data){
    if(data[user].nationality === "Germany"){
        console.log(`${user}: staying in germany`);
       }
   }
}
stayingInGermany(users);

// Q3 Find all users with masters Degree.
function mastersDegree(data){
    for(let user in data){
     if(data[user].qualification === "Masters"){
         console.log(`${user}: masters degree`);
        }
    }
 }
 mastersDegree(users);


 // Q4 Group users based on their Programming language mentioned in their designation.
 function groupUsers(data) {
    let Javascript = [];
    let Python = [];
    let Golang = [];
 for(let user in data){
    
    if(data[user].desgination.includes("Javascript")){
        Javascript.push(user);
      }
    else if(data[user].desgination.includes("Python")){
        Python.push(user);
      }
    else if(data[user].desgination.includes("Golang")){
        Golang.push(user);
      }
    }
    console.log(`Javascript :${Javascript.join()}`);
    console.log(`Python :${Python.join()}`);
    console.log(`Golang :${Golang.join()}`);
 }
 groupUsers(users);

module.exports = {
playingVideoGames,stayingInGermany,mastersDegree,groupUsers};