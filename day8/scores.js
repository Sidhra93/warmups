console.log("Golf Scores \n\n");

var clubHouseTotal = 0;
var players = [
  {
    name: "Bob",
    scores: [3, 2, 6, 11, 9, 2, 6, 9, 10]
  },
  {
    name: "Jimbo",
    scores: [5, 12, 9, 22, 13, 7, 16, 10, 11]
  },
  {
    name: "Fish",
    scores: [2, 2, 4, 5, 4, 3, 6, 4, 1]
  }
];

var totalScores = function(scoresArr){
  var total = 0;
  for (var i = 0; i < scoresArr.length; i++) {
    total += scoresArr[i];
  }
  return total;
}

for (var i = 0; i < players.length; i++) {
  clubHouseTotal += totalScores(players[i].scores);
  console.log(players[i].name + "'s total score is " + totalScores(players[i].scores));
}

console.log("\n\n Club House Total is " + clubHouseTotal);


// console.log(players[0].name + "'s total score is " + totalScores(players[0].scores));
// console.log(players[1].name + "'s total score is " + totalScores(players[1].scores));
// console.log(players[2].name + "'s total score is " + totalScores(players[2].scores));
