// http://projecteuler.net/problem=9

var findPythagoreanTriplets = function(max)
{
  var triplets = [];
  for (a = 1; a <= max; a++)
  {
    for (b = a; b <= max - a; b++)
    {
      var c2 = Math.pow(a, 2) + Math.pow(b, 2);
      var c = Math.sqrt(c2);

      if (a + b + c === max)
      {
        triplets.push([a, b, c]);
      }
    }
  }

  return triplets;
};

var pythagoreanTripletProduct = function(max)
{
  var triplets = findPythagoreanTriplets(max);
  if (triplets.length === 0) return undefined;

  var results = [];
  for (var ii = 0; ii < triplets.length; ii++)
  {
    results.push({ triplet: triplets[ii], product: triplets[ii][0] * triplets[ii][1] * triplets[ii][2] });
  }
  return results;
};

console.log("Pythagorean triplet product for 12 (3,4,5): ", pythagoreanTripletProduct(12)); // 3,4,5
console.log("Pythagorean triplet product for 1000: ", pythagoreanTripletProduct(1000));