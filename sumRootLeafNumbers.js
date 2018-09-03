var sumNumbers = function(root) {
  let sum = 0;

  const DFS = (node = root, val = 0) => {
    if (node.left === null && node.right === null) {
      sum += val * 10 + node.val;
      return;
    }
    
    if (node.left) {
      DFS(node.left, val * 10 + node.val);
    }
    if (node.right) {
      DFS(node.right, val * 10 + node.val);
    }
  };
  
  DFS();
  return sum;
};

var Node = function(val) {
  this.val = val;
  this.right = this.left = null;
};

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
