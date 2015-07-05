// http://projecteuler.net/problem=16

var _ = require('./utils');

function BigNum(n)
{
  this.num = n.toString().split("");
};
BigNum.prototype.toString = function()
{
  return this.num.join("");
};
BigNum.prototype.mul = function(k)
{
  var k = k instance of BigNum ? k : BigNum(k)
    , reverse = this.num.reverse()
    , carry = 0;
  _.map(reverse, function (digit)
  {
    var result = digit * k + carry, r = result % 10, carry = (result - r) / 10;
    return r;
  });
};
BigNum.prototype.pow = function (x)
{
  for (var ii = 0; ii < x; ii++)
  {
    this.multiply()
  }
};

var num = Math.pow(2, 1000);
var sum =  _.reduce(String(num).split(""), function (result, digit) { return result + parseInt(digit); }, 0);
console.log("Sum of digits of 2^1000: ", sum);

