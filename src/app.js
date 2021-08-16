//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester United";
let trophiesWon = 27;

//Write your function here
let createManager = (managerName,managerAge,currentTeam,trophiesWon) => {
  let manager = [managerName,managerAge,currentTeam,trophiesWon];
  return manager;
} 

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
let createFormation = (formation) => {
  if(formation.length == 0) {
    return null;
  }
  let formationObject = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  }
  return formationObject;
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) => {
  let array = players.filter((player) => {
    return player.debut === year;
  })
  return array;
}
//Progression 4 - Filter players that play at the position _______
let filterByPosition = (position) => {
 let array = players.filter((player) => {
   return player.position === position;
 })
 return array;
}

//Progression 5 - Filter players that have won ______ award
let filterByAward = (awardName) => {
  let playersByAward = [];
  for(let i=0;i<players.length;i++) {
    for(let j=0;j<players[i].awards.length;j++) {
      if(players[i].awards[j].name == awardName) {
        playersByAward.push(players[i]);
      }
    }
  }
  return playersByAward;
}

//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) => {
  let playersByAward = [];
  let nTimes = 0;
  for(let i=0;i<players.length;i++) {
    nTimes = 0;
    for(let j=0;j<players[i].awards.length;j++) {
      if(players[i].awards[j].name == awardName) {
        nTimes = nTimes + 1;
      }
    }
    if(nTimes == noOfTimes) {
      playersByAward.push(players[i]);
    }
  }
  return playersByAward;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
let filterByAwardxCountry = (awardName, country) => {
  let playerByCountry = [];
  for(let i=0;i<players.length;i++) {
    let Country = 0;
    for(let j=0;j<players[i].awards.length;j++) {
      if(players[i].awards[j].name == awardName) {
        Country += 1;
      }
    }
    if(Country > 0 && players[i].country == country) {
      playerByCountry.push(players[i]);
    }
  }
  return playerByCountry;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
let filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  let playerName = [];
  for(let i=0;i<players.length;i++) {
    let nAwards = players[i].awards.length;
    if((nAwards >= noOfAwards) && (players[i].team == team) && (players[i].age < age)) {
      playerName.push(players[i]);
    }
  }
  return playerName;
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
