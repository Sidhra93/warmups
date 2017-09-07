var message = "frzdugv glh";
var shiftAmount = 3;

var decodeMessage = function(str,shift){
  var characterNumber = 0;
  var newCharacter = "";
  var decoded = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) !== " " && str.charAt(i) !== "," && str.charAt(i) !== ".") {
      characterNumber = str.charCodeAt(i);
      newCharacter = String.fromCharCode(characterNumber - shift);
      decoded += newCharacter;
    } else {
      decoded += str.charAt(i);
    }
  }
  return decoded;
}

console.log(decodeMessage(message, shiftAmount));

// FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

//TRY ARRAY METHOD
