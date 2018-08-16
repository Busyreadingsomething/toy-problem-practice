var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  while(start <= mid && mid <= end) {
    if (target < nums[mid]) {
      end = mid - 1;
      mid = Math.floor((start + end) / 2);
    } else if (target > nums[mid]) {
      start = mid + 1;
      mid = Math.floor((start + end) / 2);
    } else if (target === nums[mid]) {
      return mid;  
    }
  }
  return -1;
};
