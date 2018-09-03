var maxPathSum = function(root) {
  let max = null;
  
  const DFS = (node = root) => {
    // base case
    if (node === null) return 0;
    
    // calculate the path sums
    const leftSum = DFS(node.left);
    const rightSum = DFS(node.right);
    
    // determine the maximum from this instance
    const pathMax = Math.max(leftSum + node.val, rightSum + node.val);
    const rootMax = Math.max(node.val, pathMax);
    const fullMax = Math.max(leftSum + rightSum + node.val, rootMax);
    
    // set the max
    max = max ? Math.max(max, fullMax) : fullMax;
    
    // return the value based on the node, left, and right
    return Math.max(node.val + (leftSum > 0 ? leftSum : 0) , node.val + (rightSum > 0 ? rightSum : 0));
  };
  DFS();
  
  return max;
};
