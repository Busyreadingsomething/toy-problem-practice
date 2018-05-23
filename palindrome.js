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
  }
}

const isPalindrome = (linked) => {
  if (!linked.head) {
    return false;
  }

  const list = [];
  let regular = '';
  let reverse = '';
  let current = linked.head;

  while(current) {
    list.push(current.val);
    current = current.next;
  }

  regular = list.join('');
  reverse = list.reverse().join('');

  return regular === reverse;
}

const palin = new LinkedList();
palin.addToTail(1);
palin.addToTail(2);
palin.addToTail(3);
palin.addToTail(2);
palin.addToTail(1);

const notPalin = new LinkedList();
notPalin.addToTail(1);
notPalin.addToTail(2);
notPalin.addToTail(3);
notPalin.addToTail(4);
notPalin.addToTail(5);

const noHead = new LinkedList();

console.log(isPalindrome(palin));
console.log(isPalindrome(notPalin));
console.log(isPalindrome(noHead));