var map1 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","X","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"]
];

var map2 = [
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","A","A","A","A"],
  ["A","X","A","A","A"]
];

var map3 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","X"],
  ["A","V","A","A","A"]
];

var map4 = [
  ["A","A","A","A","A"],
  ["A","A","V","A","A"],
  ["A","A","A","V","A"],
  ["v","v","V","v","A"],
  ["X","V","A","A","A"]
];

var holyGrailMap = [
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","V","v","S","S"],
  ["v","v","G","v","S","S"],
  ["v","v","H","v","S","S"],
  ["v","v","V","v","S","S"],
  ["A","V","A","A","A","S"]
];

var treasureFinder = function(arr, key){
  for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
      if (key === "G" || key === "H") {
        if (arr[row][col] === key) {
          console.log(row + " " + col);
          return;
        }
      }
    }
  }
  console.log("That doesn't belong in a museum!");
}
