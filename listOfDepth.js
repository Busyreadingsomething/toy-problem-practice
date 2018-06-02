class BST {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  add(val) {
    const node = new BST(val);
    if (val < this.val && !this.left) {
      this.left = node;
    } else if (val < this.val && this.left) {
      this.left.add(val);
    }

    if (val > this.val && !this.right) {
      this.right = node;
    } else if (val > this.val && this.right) {
      this.right.add(val);
    }
  }
}

class Node {
  constructor(node) {
    this.bst = node;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(node) {
    const linked = new Node(node);
    if (this.head) {
      this.tail.next = linked;
      this.tail = linked;
    } else {
      this.head = linked;
      this.tail = linked;
    }
  }

  removeFromHead() {
    let node = null;

    if (this.tail === this.head) {
      node = this.head;
      this.head = null;
      this.tail = null
    } else {
      node = this.head;
      this.head = this.head.next;
    }

    return node;
  }

  isEmpty() {
    return this.head === null;
  }
}

const listOfDepth = (bst) => {
  debugger;
  const depthHash = {};
  let depth = 0;
  let currentQ = new LinkedList();
  let nextQ = new LinkedList();

  currentQ.addToTail(bst);

  while(!currentQ.isEmpty()) {
    const node = currentQ.removeFromHead().bst;

    if (depthHash[depth]) {
      depthHash[depth].addToTail(node);
    } else {
      depthHash[depth] = new LinkedList();
      depthHash[depth].addToTail(node);
    }

    if (node.left) {
      nextQ.addToTail(node.left)
    }

    if (node.right) {
      nextQ.addToTail(node.right);
    }

    if (currentQ.isEmpty()) {
      currentQ = nextQ;
      nextQ = new LinkedList();
      depth += 1;
    }
  }

  return depthHash;
}

const testBST = new BST(3);
testBST.add(2);
testBST.add(1);
testBST.add(6);
testBST.add(5);
testBST.add(9);
testBST.add(7);
testBST.add(8);
testBST.add(10);

console.log(testBST);

console.log(listOfDepth(testBST));