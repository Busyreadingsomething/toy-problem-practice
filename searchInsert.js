var searchInsert = function(nums, target) {
  let current = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (target > nums[i]) {
      current = i + 1;
    } else if (target === nums[i]) { 
      return i;
    }
  }
  
  return current;
};