class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(val) {
    const node = new Node(val);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    return node;
  }
}

const deleteMiddleNode = (node) => {
  let current = node;
  current.val = current.next.val;
  current.next = current.next.next;

  return current;
};

const test = new LinkedList();
test.addToTail(1);
test.addToTail(2);
const node = test.addToTail(3);
test.addToTail(4);
test.addToTail(5);
console.log(JSON.stringify(test));
console.log(deleteMiddleNode(node));
console.log(JSON.stringify(test));