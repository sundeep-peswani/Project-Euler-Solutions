// http://projecteuler.net/problem=4

var isPalindrome = function (n)
{
  var str = "" + n, reverse = str.split("").reverse().join("");
  return reverse === str;
};

var largestPalindrome = 0;

for (var ii = 999; ii >= 100; ii--)
{
  for (var jj = 999; jj >= 100; jj--)
  {
    var n = ii * jj;
    if (largestPalindrome >= n) break;

    if (isPalindrome(n))
    {
      // found biggest palindrome for this ii, skip rest of jj
      if (n >= largestPalindrome)
      {
        largestPalindrome = n;
      }
      break;
    }
  }
}

console.log("Largest palindrome which is a product of two 3 digit numbers is: ", largestPalindrome);