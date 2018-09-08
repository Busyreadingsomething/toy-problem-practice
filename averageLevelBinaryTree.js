var averageOfLevels = function(root) {
  const averages = [];
  let breadth = [root];
  let temp = [];
  let val = 0;
  let count = 0;
  
  while(breadth.length > 0) {
    const node = breadth.pop();
    if (node === null) continue;
    val += node.val;
    count += 1;
    temp.push(node.left, node.right);
    
    if (breadth.length === 0) {
      averages.push(val / count);
      breadth = temp;
      temp = [];
      val = 0;
      count = 0;
    }
  }
  
  return averages;
};