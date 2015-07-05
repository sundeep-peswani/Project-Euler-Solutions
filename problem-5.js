// http://projecteuler.net/problem=5

var factorize = function (n)
{
  var factors = {1: 1}; factors[n] = 1;
  for (var ii = 2; ii < Math.sqrt(n); ii++)
  {
    var counter = 0, quotient = n;
    while (quotient % ii == 0)
    {
      counter++, quotient /= ii;
    }
    if (counter > 0)
    {
      factors[ii] = counter;
      delete factors[n];
    }
  }

  return factors;
}

var findSmallestMultiple = function (n)
{
  var allFactors = {};
  for (var ii = 2; ii <= n; ii++)
  {
    var factors = factorize(ii);
    for (var key in factors)
    {
      var num = factors[key];
      if (!allFactors[key])
      {
        allFactors[key] = 0;
      }
      if (allFactors[key] <= num)
      {
        allFactors[key] = num;
      }
    }
  }

  var product = 1;
  for (var key in allFactors)
  {
    product *= Math.pow(key, allFactors[key]);
  }

  return product;
}

console.log("Smallest multiple divisible by every number from 1-20: ", findSmallestMultiple(20));