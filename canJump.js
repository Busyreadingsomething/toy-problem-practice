var canJump = function(nums) {
  const last = nums.length - 1;
  let jump = false;

  const DFS = (leap = 0) => {
    if (leap >= last) {
      jump = true;
      return;
    }
    for (let i = 1; i <= nums[leap]; i += 1) {
      DFS(leap + i);
    }
  }
  DFS();
  return jump; // if there is no way
};

// works but doesn't pass long values