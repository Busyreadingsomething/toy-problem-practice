var isMonotonic = function(A) {
  let rate;
  
  for (let i = 0; i < A.length; i += 1) {
    const diff = A[i] - A[i + 1];
    if (!rate && diff !== 0) {
      rate = diff > 0 ? 'dec' : 'inc';
    } else if (diff > 0 && rate === 'inc') {
      return false;
    } else if (diff < 0 && rate === 'dec') {
      return false;
    }
  }
  
  return true;
};