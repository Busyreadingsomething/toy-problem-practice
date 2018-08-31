var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  
  while (n % 2 === 0) {
    n = n / 2;
  }
  
  if (n === 1) return true;
  return false;
};

/**
var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  
  const k = Math.log2(n) / Math.log2(2);
  
  return k === Math.floor(k);
};
 */