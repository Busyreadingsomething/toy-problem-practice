class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var createList = (arr) => {
  let head = null;
  let tail = null;

  for (const el of arr) {
    const item = Node(el);
    if (head === null) {
      head = item;
      tail = item;
    } else {
      tail.next = item;
      tail = item;
    }
  }

  return head;
}

var list1 = [1, 2, 3, 3, 4, 4, 5];
var list2 = [1, 1];
var list3 = [1, 2, 3, 3];

var test1 = createList(list1);
var test2 = createList(list2);
var test3 = createList(list3);

var deleteDuplicates = function(head) {
  let result = null;
  let tail = null;

  if (head === null) return result;

  let prev = null;
  let current = head;
  let next = current.next;

  while(current) {
    if (((prev && prev.val !== current.val) || prev === null) && ((next && next.val !== current.val) || next === null)) {
      if (result === null) {
        result = current;
        tail = current;
      } else {
        tail.next = current;
        tail = current;
      }
    }

    prev = current;
    current = next;
    next = next ? next.next : null;
  }
  if (tail) {
    tail.next = null;
  }
  return result;
};

