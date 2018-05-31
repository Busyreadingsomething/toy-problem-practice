class BinarySearchTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const minimalTree = (array, start, end) => {
  const midpoint = Math.floor((start + end) / 2);
  const node = new BinarySearchTree(array[midpoint]);
  
  if (start === end) {
    return null;
  }

  node.left = minimalTree(array, start, midpoint);
  node.right = minimalTree(array, midpoint + 1, end);

  return node;
};

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const test2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const test3 = [1, 2, 3];

console.log(minimalTree(test, 0, test.length));
console.log(minimalTree(test2, 0, test2.length));
console.log(minimalTree(test3, 0, test3.length));