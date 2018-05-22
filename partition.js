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

const convertArrayToLL = (array, linked) => {
  for (const num of array) {
    linked.addToTail(num);
  }
}

const partition = (linked, part) => {
  const lessThan = [];
  const greaterThanOrEqual = [];
  const newLL = new LinkedList();

  let current = linked.head;
  while(current) {
    if (current.val < part) {
      lessThan.push(current.val);
    } else {
      greaterThanOrEqual.push(current.val);
    }
    current = current.next;
  }
  convertArrayToLL(lessThan, newLL);
  convertArrayToLL(greaterThanOrEqual, newLL);

  return newLL;
}

const test = new LinkedList();
test.addToTail(3);
test.addToTail(5);
test.addToTail(8);
test.addToTail(5);
test.addToTail(10);
test.addToTail(2);
test.addToTail(1);

const newLL = partition(test, 5);

console.log(JSON.stringify(newLL));