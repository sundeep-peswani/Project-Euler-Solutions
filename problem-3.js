// http://projecteuler.net/problem=3

var findLargestFactor = function(n)
{
  var start = Math.round(Math.sqrt(n));

  while (start > 0) {
    if (n % start === 0) {
      return start;
    }
    start--;
  }

  return 1;
}

console.log("Max factor for 600851475143: ", findLargestFactor(600851475143));