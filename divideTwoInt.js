var divide = function(dividend, divisor) {
  let count = 0;
  let current = 1;
  let negative = dividend < 0 ^ divisor < 0; // will return 1 if one or the other is true, 0 if both are true or both are false

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);
  let multiple = divisor;

  while (dividend >= divisor) {
    if (dividend > multiple) {
      dividend -= multiple;
      count += current;
      multiple += multiple;
      current += current;
    } else if (dividend >= divisor) {
      dividend -= divisor;
      count += 1;
      multiple = divisor;
      current = 1;
    }
  }
  
  if (negative) {
    count = parseInt('-' + count, 10);
  }
  
  return count;
};