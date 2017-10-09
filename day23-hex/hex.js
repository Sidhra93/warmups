var hex = "0xAB";

var hex_array = hex.split("");
hex_array.shift();
hex_array.shift();

hex_array.forEach(function(elem){
  if (elem == "A") {
    elem = "atta";
  } else if (elem == "B") {
    elem = "bibbity";
  } else if (elem == "C") {
    elem = "city";
  } else if (elem == "D") {
    elem = "dickety";
  } else if (elem == "E") {
    elem = "ebbity";
  } else if (elem == "F") {
    elem = "fleventy";
  }
});

hex_result = hex_array.join("-");
