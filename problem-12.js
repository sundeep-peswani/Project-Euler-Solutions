// http://projecteuler.net/problem=12

var generateTriangleNumber = function (n)
{
  var sum = 0;
  for (var ii = 1; ii <= n; ii++)
  {
    sum += ii;
  }
  return sum;
};

var factorize = function (n)
{
  var factors = [];
  for (var ii = 1; ii < Math.sqrt(n); ii++)
  {
    if (n % ii !== 0) continue;
    factors.push(ii);
    factors.push(n);
  }
  return factors;
};

n = 0, triangle = 0, factors = [];
while (factors.length < 500)
{
  n++, triangle = generateTriangleNumber(n), factors = factorize(triangle);
};

console.log("First triangle number to have 500 divisors: %s (n: %s)", triangle, n);