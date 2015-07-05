// http://projecteuler.net/problem=14

var sequenceLengths = [0, 1];

var calcSequenceLength = function (n, length)
{
  var length = length || 0;
  if (sequenceLengths[n]) return length + sequenceLengths[n];

  var newN = n % 2 === 0 ? n / 2 : 3 * n + 1;
  var totalLength = calcSequenceLength(newN, length+1);
  sequenceLengths[n] = totalLength - length;
  return totalLength;
};

var longestStartingNumber = 0;
var longestSequenceLength = 0;

for (var ii = 1; ii < 1000000; ii++)
{
  var length = calcSequenceLength(ii);
  if (length > longestSequenceLength)
  {
    longestStartingNumber = ii;
    longestSequenceLength = length;
  }
};

console.log("Starting number, under 1 million, which produces the longest sequence: %d (length: %d)", longestStartingNumber, longestSequenceLength);