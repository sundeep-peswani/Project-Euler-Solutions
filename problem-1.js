// http://projecteuler.net/problem=1

var fizzbuzzSum = function (n, sum)
{
  var sum = sum || 0; n--;
  if (n <= 0) return sum;
  if (n % 3 === 0 || n % 5 === 0) {
    sum += n;
  }
  return fizzbuzzSum(n, sum);
}

console.log("Sum of fizzbuzz numbers (1-10): ", fizzbuzzSum(10, 0));
console.log("Sum of fizzbuzz numbers (1-1000): ", fizzbuzzSum(1000, 0));