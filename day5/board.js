var grid;
// var rows = 10;
// var cols = 20;
var symbol;


var board = function(size, symbol){
  for (var row = 1; row <= size; row++) {
    grid = "";
    for (var col = 1; col <= size; col++) {
      if (row % 2 === 1) {
          grid += symbol + " ";
      } else {
        grid += " " + symbol;
      }
    }
    console.log(grid);
  }
}

board(10,"!");
