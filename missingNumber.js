var missingNumber = function(nums) {
  let max = 0;
  let current = 0;
  for (let i = 0; i <= nums.length; i += 1) {
    max += i;
    if (i < nums.length) {
      current += nums[i];
    }
  }
  
  return max - current;
};