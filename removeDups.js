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

const removeDups = (linkedList) => {
  debugger;
  let current = linkedList.head;
  let previous;
  const hash = {};

  while(current) {
    if (!(current.value in hash)) {
      hash[current.value] = true;
      previous = current;
      current = current.next;
    } else {
      previous.next = current.next;
      current = current.next;
    }
  }

  return linkedList;
};

const testLL = new LinkedList();
testLL.addToTail(3);
testLL.addToTail(1);
testLL.addToTail(3);
testLL.addToTail(5);
testLL.addToTail(7);

console.log(removeDups(testLL));