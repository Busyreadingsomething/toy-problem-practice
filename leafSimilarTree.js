const getLeafs = (root) => {
  const list = [];
  const stack = [root];
  
  // loop through the root
  while (stack.length > 0) {
    const node = stack.pop();
    if (node === null) continue;

    if (node.left === null && node.right === null) {
      list.push(node.val);
    }
    
    stack.pop(node.right, node.left);
  }
  return list;
}

var leafSimilarBad = function(root1, root2) {
  const list1 = getLeafs(root1);
  const list2 = getLeafs(root2);
  
  if (list1.length !== list2.length) return false;
  
  for (let i = 0; i < list1.length; i += 1) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  
  return true;
};

var leafSimilar = (root1, root2) => {
  const list1 = getLeafs(root1);
  const list2 = getLeafs(root2);

  return JSON.stringify(list1) === JSON.stringify(list2);
};