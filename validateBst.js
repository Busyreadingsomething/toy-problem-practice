class BST {
  constructor(val) {
    this.val = val;
    this.right = this.left = null;
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

const validateBst = (bst) => {
  const inOrder = [];

  const inOrderTraversal = (node) => {
    if (node.left) {
      inOrderTraversal(node.left);
    }

    inOrder.push(node.val);
    
    if (node.right) {
      inOrderTraversal(node.right);
    }
  };

  inOrderTraversal(bst);

  for (let i = 1; i < inOrder.length; i += 1) {
    if (!(inOrder[i - 1] <= inOrder[i])) {
      return false;
    }
  }

  return true;
};

const bstTest = new BST(7);
const bstTest2 = new BST(7);

const testArray = [5, 10, 4, 8, 11, 4, 9];

const createGoodBst = (array, bst) => {
  for (const num of array) {
    bst.add(num);
  }
};

const createBadBst = (array, bst) => {
  let current = bst;
  let index = 0;

  while(current) {
    if (index >= array.length) {
      break;
    }
    current.left = new BST(array[index]);
    index += 1;
    current = current.left;
  }
}

createGoodBst(testArray, bstTest);
createBadBst(testArray, bstTest2);

console.log(bstTest);
console.log(bstTest2);

console.log(validateBst(bstTest) === true);
console.log(validateBst(bstTest2) === false);
