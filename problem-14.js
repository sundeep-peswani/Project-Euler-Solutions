// http://projecteuler.net/problem=14

var generateSequence = function (n, sequence)
{
  var sequence = sequence || [];
  sequence.push(n);

  return n === 1 ?
          sequence :
          n % 2 === 0 ?
            generateSequence(n/2, sequence) :
            generateSequence(3 * n + 1, sequence);
};

var longestSequence = [];
var longestStartingNumber = 0;

for (var ii = 1; ii < 1000000; ii++)
{
  var sequence = generateSequence(ii);
  if (sequence.length > longestSequence.length)
  {
    longestStartingNumber = ii;
    longestSequence = sequence;
  }
};

console.log("Starting number, under 1 million, which produces the longest sequence: %d (length: %d)", longestStartingNumber, longestSequence.length);