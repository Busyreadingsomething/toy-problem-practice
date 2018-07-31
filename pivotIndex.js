const pivotIndex = function(nums) {
  let left = 0;
  let right = nums
    .slice(1)
    .reduce((acc, num) => acc + num, 0);
  
  for (let i = 0; i < nums.length; i += 1) {
    if (left === right) {
      return i;
    }
    left += nums[i];
    right -= nums[i + 1];
  }
  
  return -1
};