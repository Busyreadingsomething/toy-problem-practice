var moveZeroes = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  
  while (start < end) {
    if (nums[start] !== 0) {
      start += 1;
      continue;
    }
    for (let i = start; i < end; i += 1) {
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
    }
    start = 0;
    end -= 1;
  }
};

// USING TWO POINTERS
var moveZeroes2 = function(nums) {
  let start = 0, end = 1;
  
  while (end < nums.length) {
    if (nums[start] === 0 && nums[end] !== 0) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
    } else if (nums[start] !== 0) {
      start += 1
    }
    end += 1;
  }
};