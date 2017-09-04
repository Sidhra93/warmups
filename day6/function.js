console.log("Granny Talk");

//var askGranny = prompt("Talk to granny");
var askGranny = "HELLO?!?";
var askGrandpa = "how are you";
var reply;

var grannyTalk = function(str){
  var startYear = 1930;
  var endYear = 1950;
  var year = Math.round(Math.random() * (endYear - startYear) + startYear);
  if (str === "bye"|| str === "BYE" ) {
    console.log("What's that honey, I didn't hear you...");
  } else if (str === str.toUpperCase()) {
    console.log("NO, NOT SINCE " + year);
  } else {
    console.log("SPEAK UP SONNY JIM!");
  }
}

// var grandpaTalk = function(str){
//   grannyTalk(str);
//
// }

grannyTalk(askGranny);
//grandpaTalk(askGrandpa);
