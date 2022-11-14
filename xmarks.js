const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

function finalPosition(moves) {
  for (const move of moves) {
    if(moves === 'north') {
      return y = 1; 
    } else if (moves === 'south') {
      return y = -1
    }
  }
}
console.log(finalPosition(moves))