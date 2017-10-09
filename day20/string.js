var str = "title=jaws&page=5";
var strArray = str.split(/\W/);

var strObject = {};

strObject[strArray[0]] = strArray[1];
strObject[strArray[2]] = Number(strArray[3]);
