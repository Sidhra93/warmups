console.log("Leap Years in the last century");
for (var year = 2017-100; year <= 2017; year++) {
  if (year % 4 === 0) {
    console.log(year);
  }
}
console.log("\n \n");

console.log("Multiples of 7 between 1 and 200");
for (var num = 1; num < 200; num++) {
  if (num % 7 === 0) {
    console.log(num);
  }
}
console.log("\n \n");

console.log("Every second odd number between 1 and 200");
var skip = false;
for (var num2 = 3; num2 < 200; num2 += 4) {
    // if (num2 % 2 === 1) {
    //   console.log(num2);
    // }
    if (num2 % 2 === 1) {
      if (!skip) {
        skip = true;
      }
      console.log(num2);
    }
    skip = false;
}
console.log("\n \n");

console.log("Prime Numbers between 1 and 200");
var counter;
for (var num3 = 1; num3 < 200; num3++) {
  counter = 0;
  for (var i = 1; i <= num3 ; i++) {
    if (num3 % i === 0) {
      counter = counter + 1;
    }
  }
  if (counter === 2) {
    console.log(num3);
  }
}
