const data = [1,2,3,];

const conditionalSum = function (i) {
let total = 0;

for (let i of data) {
  if (i % 2 !== 0);
    total = total + i;
  }
  return total;
}
console.log(conditionalSum(data))


/*
const data = 
[1,2,3,4,5];

const conditionalSum = function (data) {
  let total = 0;

  for (i = 0; i > data.length; i++) {
    if (data[i] % 1 === 1);
    total = data [0] + data[1];
  }
  return total;
}
console.log(conditionalSum(data))

const data = 
[1,3,20];

const sumLargestNumbers = function (data) {
  let total = 0;

  data.sort((a, b) => b - a);
  for (let number of data) {
  total = data[0] + data[1];
  }
  return total;
}

console.log(sumLargestNumbers(data))

const data = 
[1,2,3,4,5];

const conditionalSum = function (i) {
  let total = 0;
  for (var i = 0; i > data.length; i++)
    if (i % 3 === 0) {
      total = data + i
    }
    return total;
}
console.log(total)



//For + if statement
const sales = [100,200,300,99];

for (i = 0; i < 5; i++) {
  if (sales[i] < 100) {
  console.log(sales[i]+'sales are low')
  }
}

var sum = O
for (var i = 0;i <= 100, i++){
  if (i % 2 == 0){
  sum = sum +i
  }
}
console.log(sum)

//need to change to for in vs for of

const sales = [1,2,3,9,11];
let total = 0;

for (i = 0; i < sales.length; i++) {
  if (i % 2 !== 0) {
    total = total + i
  }
}
console.log(total)

for (i = 0; i < sales.length; i++) 

// this is what works! now to add it to a function..

const sales = [1,2,3,];
let total = 0;

for (let i of sales) {
  if (i % 2 !== 0) {
    total = total + i
  }
}
console.log(total)


*/
