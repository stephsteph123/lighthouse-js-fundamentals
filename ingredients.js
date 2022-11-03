const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
for (var row = 0; row < ingredients.length; row++) {
  console.log(ingredients[row]);
}
var i = 0;
let ingredientsLength =  ingredients.length;
while (i < ingredientsLength){
	let val = ingredients[i];
	i++
	console.log(ingredients[i])
}
for (var i = ingredients.length - 1; i>=0; i--){
	console.log(ingredients[i]);
}