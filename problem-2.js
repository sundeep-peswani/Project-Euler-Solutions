// http://projecteuler.net/problem=2

var fibSum = function (prev, current, max, sum)
{
  var sum = (sum || 0) + prev
    , fib = prev + current
    , prev = current
    , current = fib;
  if (fib >= max) {
    return sum + prev + current;
  }
  return fibSum(prev, current, max, sum);
}

console.log("Sum smaller than 4million: ", fibSum(1, 2, 4000000));