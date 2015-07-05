// http://projecteuler.net/problem=6

var findDiff = function (n)
{
  var sumOfSquares = 0;
  var squareOfSum = 0;

  for (var ii = 1; ii <= n; ii++)
  {
    sumOfSquares += Math.pow(ii,2);
    squareOfSum += ii;
  }

  return Math.abs(Math.pow(squareOfSum, 2) - sumOfSquares);
}

console.log("Diff between sum of squares and square of sums, first 10: " , findDiff(10));
console.log("Diff between sum of squares and square of sums, first 100: " , findDiff(100));
