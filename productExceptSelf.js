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
