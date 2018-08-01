/*
var productExceptSelf = function(nums) {
  const output = [];
  for (let i = 0; i < nums.length; i += 1) {
    output.push(nums.reduce((acc, num, index) => {
      if (index !== i) {
        acc *= num;
      }
      return acc;
    }, 1));
  }
  return output;
};
// EXCEEDED TIME LIMIT
*/

var productExceptSelf = function(nums) {
  const result = Array(nums.length).fill(1);
  let leftProd = 1;
  let rightProd = 1;
  for (let i = 0; i < nums.length; i += 1) {
    result[i] *= leftProd;
    leftProd *= nums[i];
  }
  
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= rightProd;
    rightProd *= nums[i];
  }

  return result;
};

// REACHED: 20%