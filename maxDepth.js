var maxDepth = function(root) {
  let max = 0;

  const DFS = (node = root, depth = max) => {
    if (node === null) {
      max = Math.max(max, depth);
      return;
    }

    DFS(node.left, depth + 1);
    DFS(node.right, depth + 1);
  }
  DFS();
  return max;
};

// 100%