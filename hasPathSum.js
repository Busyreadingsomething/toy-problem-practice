var hasPathSum = function(root, sum) {
  if (root === null) return false;
  
  const val = sum - root.val;
  if (val === 0 && root.left === null && root.right === null) {
    return true;
  }
  
  if (root.left && hasPathSum(root.left, val)) {
    return true;
  }
  if (root.right && hasPathSum(root.right, val)) {
    return true;
  }
  
  return false;
};

var hasPathSumV2 = function(root, sum) {
  if (root === null) return false;
  
  if (root.left === null && root.right === null) {
    return sum - root.val === 0;
  }
  
  let left = hasPathSum(root.left, sum - root.val);
  let right = hasPathSum(root.right, sum - root.val);
  
  return left || right;
};