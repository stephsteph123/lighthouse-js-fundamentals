function calculateRectangleArea(l, w) {
  var area = l * w;
  if (area > 0) { return area }
  else { return undefined }
}
function calculateTriangleArea(l, w) {
  var area = l * w / 2;
  if (area > 0) { return area }
  else { return undefined }
}
function calculateCircleArea(r) {
  var area = Math.PI * Math.pow(r,2);
  if (r >= 0) { return area }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined