const numberOfVowels = function(data) {
var temp = data;
var counta = (temp.match(/a/g) || []).length;
var counte = (temp.match(/e/g) || []).length;
var counti = (temp.match(/i/g) || []).length;
var counto = (temp.match(/o/g) || []).length;
var countu = (temp.match(/u/g) || []).length;
console.log(counta+counte+counti+counto+countu);
  }

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));