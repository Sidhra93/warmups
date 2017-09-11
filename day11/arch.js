console.log("Archaeologists Map");

var rowInput = document.querySelector(".rows");
var colInput = document.querySelector(".cols");
var mapButton = document.querySelector("button");
var map = document.querySelector("p");

var makeFakeMap = function(){
  var rows = rowInput.value;
  var cols = colInput.value;
  var arr = [];
  var innerArr = [];
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      innerArr.push("A");
    }
    arr.push(innerArr);
    innerArr = [];
  }
  var randomRow = Math.floor(Math.random() * rows);
  var randomCol = Math.floor(Math.random() * cols);
  arr[randomRow][randomCol] = "X";
  console.log(arr);
  mapArray(arr);
}

var mapArray = function(arr){
  map.textContent = arr;
  for (var i = 0; i < map.textContent.length; i++) {
    if (map.textContent[i] === ",") {
      map.textContent[i] = " ";
    }
  }
}

rowInput.addEventListener("click", function(){
  rowInput.value = "";
  rowInput.style.color = "black";
});

colInput.addEventListener("click", function(){
  colInput.value = "";
  colInput.style.color = "black";
});

mapButton.addEventListener("click", makeFakeMap);
