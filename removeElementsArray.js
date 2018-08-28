var removeElement = function(nums, val) {
  let start = 0;
  let end = nums.length - 1;
  let count = 0;

  while (start <= end) {
    if (nums[start] === val && nums[end] !== val) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start += 1;
      end -= 1;
      count += 1;
    } else if (nums[end] === val) {
      end -= 1;
      count += 1;
    } else if (nums[start] !== val) {
      start += 1;
    } else if (nums[start] === val && start === end) {
      start += 1;
      count += 1;
    }
  }
  
  for (let i = 0; i < count; i += 1) {
    nums.pop();
  }

  return nums.length;
};