var searchMatrix = function(matrix, target) {
  let startM = 0;
  let endM = matrix.length - 1;
  
  while (startM <= endM) {
    let midM = Math.floor((startM + endM) / 2);
    let startN = 0;
    let endN = matrix[midM].length - 1;
    
    if (matrix[midM][startN] > target) {
      endM = midM - 1;
    } else if (matrix[midM][endN] < target) {
      startM = midM + 1;
    } else{

      while(startN <= endN) {
        let midN = Math.floor((startN + endN) / 2);
        
        if (matrix[midM][midN] < target) {
          startN = midN + 1;
        } else if (matrix[midM][midN] > target) {
          endN = midN - 1;
        } else if (matrix[midM][midN] === target) {
          return true;
        }
      }
      return false;
    } 
    
  }
  
  return false;
};

var matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];

var bad1 = [
  [1],
  [3],
];