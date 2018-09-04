var rotate = function(nums, k) {
  const locate = k % nums.length;
  const list = nums.splice(nums.length - locate);
  nums.unshift(...list);
};

var rotateBad = function(nums, k) {
  for (let i = 0; i < k; i += 1) {
    const temp = nums.pop();
    nums.unshift(temp);
  }
};