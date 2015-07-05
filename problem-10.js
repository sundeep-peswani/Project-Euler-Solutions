// http://projecteuler.net/problem=10

var findPrimes = function (max)
{
  var primes = [2];
  for (var ii = 3; ii < max; ii += 2)
  {
    var rootII = Math.sqrt(ii); var isPrime = true;
    for (var jj = 0; primes[jj] <= rootII && jj < primes.length; jj++)
    {
      var prime = primes[jj];
      if (ii % prime == 0)
      {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(ii);
  }
  return primes;
};

var sumNumbers = function (numbers)
{
  var sum = 0;
  for (var ii = 0; ii < numbers.length; ii++)
  {
    sum += numbers[ii];
  }
  return sum;
};

console.log("Sum of primes below 10: ", sumNumbers(findPrimes(10)));
console.log("Sum of primes below 2mm: ", sumNumbers(findPrimes(2000000)));