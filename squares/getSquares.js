var numArray = [4, 1, 16, 1, 10, 35, 22];

var unique = numArray.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});

var getSquares = function() {
  squareArray = [];
  unique.forEach(function(number){
    if (Math.sqrt(number) % 1 == 0) {
      squareArray.push(number)
    }
  });
  return squareArray.sort(function(a, b){return a-b});
}
