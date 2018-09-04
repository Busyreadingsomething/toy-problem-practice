var transpose = function(A) {
  const result = [];
  
  for (let i = 0; i < A[0].length; i += 1) {
    result[i] = [];
    for (let j = 0; j < A.length; j += 1) {
      result[i].push(A[j][i]);
    }
  }
  
  return result;
};