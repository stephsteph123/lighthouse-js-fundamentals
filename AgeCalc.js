function ageCalculator (name, yearOfBirth, currentYear) {
	let i = name 
	let y = (currentYear - yearOfBirth)
	console.log(i + " is " + y + " years old.")
}


console.log(ageCalculator("Suzie", 1984, 2016));
console.log(ageCalculator("Jack", 2004, 2016));
console.log(ageCalculator("Ali", 2016, 2016));