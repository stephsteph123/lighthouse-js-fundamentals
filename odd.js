const isOdd  = function (num) {
  return num % 3 === 0;
}

const threreIsOdd = isOdd(3);
const eightIsOdd = isOdd(8);

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));