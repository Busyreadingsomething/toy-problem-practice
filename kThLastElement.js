class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const kThElement = (k, linkedList) => {
  const list = [];
  let current = linkedList.head;
  debugger;
  while(current) {
    list.push(current);
    current = current.next;
  }

  const index = list.length - k;
  return list[index];
};

const testLL = new LinkedList();
testLL.addToTail(3);
testLL.addToTail(1);
testLL.addToTail(5);
testLL.addToTail(4);
testLL.addToTail(9);
testLL.addToTail(1);

console.log(kThElement(3, testLL));