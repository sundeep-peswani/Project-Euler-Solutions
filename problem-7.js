// http://projecteuler.net/problem=7

var isPrime = function (n)
{
  for (var ii = 3; ii < Math.sqrt(n); ii += 2)
  {
    if (n % ii === 0) return false;
  }
  return true;
};

var findNthPrime = function (n)
{
  var nthPrime = 2, ii = 3;
  while (n >= 1) // skip 2
  {
    if (isPrime(ii))
    {
      n--;
      nthPrime = ii;
    }
    ii += 2;
  }

  return nthPrime;
};

console.log("6th prime: ", findNthPrime(6));
console.log("10001st prime: ", findNthPrime(10001));