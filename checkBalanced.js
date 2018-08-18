class BST {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }

  add(val) {
    const node = new BST(val);
    if (val <= this.val && !this.left) {
      this.left = node;
    } else if (val <= this.val && this.left) {
      this.left.add(val);
    } else if (val > this.val && !this.right) {
      this.right = node;
    } else if (val > this.val && this.right) {
      this.right.add(val);
    }
  }
}

const checkBalanced = (bst) => {
  const list = [];

  const dFS = (node, depth = 0) => {
    if (!node.left && !node.right) {
      list.push(depth);
      return;
    }

    if (node.left) {
      dFS(node.left, depth + 1);
    }

    if (node.right) {
      dFS(node.right, depth + 1);
    }
  }

  dFS(bst);

  for (let i = 0; i < list.length; i += 1) {
    for (let j = i + 1; j < list.length; j += 1) {
      if ((list[i] - list[j]) > 1) {
        return false;
      }
    }
  }

  return true;
};

const bstPerfect = new BST(10);
const testPerfect = [5, 20, 3, 7, 15, 30];

const bstImperfect = new BST(10);
const testImperfect = [5, 20, 7, 4, 25, 22, 27];

const bstUnbalanced = new BST(10);
const testUnbalanced = [5, 20, 3, 7, 8];

const addToBST = (array, bst) => {
  for (const num of array) {
    bst.add(num);
  }
};

addToBST(testPerfect, bstPerfect);
addToBST(testImperfect, bstImperfect);
addToBST(testUnbalanced, bstUnbalanced);

console.log('PERFECT BALANCED:', checkBalanced(bstPerfect) === true);
console.log('IMPERFECT BALANCED:', checkBalanced(bstImperfect) === true);
console.log('UNBALANCED:', checkBalanced(bstUnbalanced) === false);

// Implemented O(n) Time and O(n) Space solution

var isBalanced = function(root) {
  let balance = true;
  
  const checkDepth = (node = root) => {
    if (node === null) return 0;
    const leftLevel = checkDepth(node.left);
    const rightLevel = checkDepth(node.right);
    if (Math.abs(leftLevel - rightLevel) > 1) {
      balance = false;
    }
    return 1 + Math.max(leftLevel, rightLevel);
  };
  
  checkDepth();
  return balance;
};