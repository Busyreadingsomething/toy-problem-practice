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

const loopDetection = (linked) => {
  const store = {};
  let current = linked.head;

  while(current) {
    const copy = JSON.stringify(Object.assign({}, current, {next: null}));
    if (store[copy]) {
      return current;
    }
    store[copy] = true;
    current = current.next;
  }
  return false;
}

const noLoop = new LinkedList();
noLoop.addToTail(1);
noLoop.addToTail(2);
noLoop.addToTail(3);

const loop = new LinkedList();
loop.addToTail(1);
loop.addToTail(2);
const corrupt = loop.addToTail(3);
loop.addToTail(4);
const cycle = loop.addToTail(5);
cycle.next = corrupt;

console.log(loopDetection(noLoop));
console.log(loopDetection(loop));