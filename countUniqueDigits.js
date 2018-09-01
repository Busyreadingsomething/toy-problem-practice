var countNumbersWithUniqueDigits = function(n) {
  let count = 9;
  let memo = 9;
  for (let i = 1; i < n; i += 1) {
    const calc = memo * (10 - i);
    memo = calc;
    count += calc;
  }

  return count + 1;
};
