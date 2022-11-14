const urlEncode = function(text) {
  let unit = "";
  // Loop through text if it doesn't begin with " "
  if (text[0] !== " ") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        unit += "%20";
      } else {
        unit += text[i];
      }
    }
    return unit;
  }
  // Loop through text starting from 2nd character if it begins with " "
  for (let i = 1; i < text.length - 1; i++) {
    if (text[i] === " ") {
      unit += "%20";
    } else {
      unit += text[i];
    }
  }
  return unit;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));