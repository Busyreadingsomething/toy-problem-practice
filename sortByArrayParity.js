// O(n) Space and O(2n) Time
var sortArrayByParity = function(A) {
  const even = [];
  const odd = [];
  
  for (const num of A) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }
  
  return [...even, ...odd];
};

// O(n) Time && O(1) Space
var sortArrayByParity = function(A) {
  let start = 0;
  let end = A.length - 1;
  
  while(start < end) {
    if (A[end] % 2 === 1) {
      end -= 1;
    } else if (A[start] % 2 === 0) {
      start += 1;
    } else {
      let temp = A[end];
      A[end] = A[start];
      A[start] = temp;
      start += 1;
      end -= 1;
    }
  }
  
  return A;
};
