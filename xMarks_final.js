const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition() {
  const rangeResult = [];
  var y = 0;
  var x = 0;
  for (let unit of moves) {
    if (unit === 'north') {
      y = y + 1;
    } else if (unit === 'west') {
      x = x - 1;
    } else if (unit === 'east') {
      x = x + 1;
    } else if (unit === 'south') {
      y = y - 1;
    }
  }
  return [x,y];
}
console.log(finalPosition());

