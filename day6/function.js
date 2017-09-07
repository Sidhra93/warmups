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
    reply = console.log("What's that honey, I didn't hear you...");
  } else if (str === str.toUpperCase()) {
    reply = console.log("NO, NOT SINCE " + year);
  } else {
    reply = console.log("SPEAK UP SONNY JIM!");
  }
  return reply;
}

var grandpaTalk = function(str){
  var grandpaReply = grannyTalk(str);
  console.log(grandpaReply);
}

grannyTalk(askGranny);
grandpaTalk(askGrandpa);
