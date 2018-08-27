const removeElements = function(head, val) {
  let start = null;
  let tail = null;
  let current = head;
  while (current) {
    if (start === null && current.val !== val) {
      start = current;
      tail = current;
    } else if (start && current.val !== val) {
      tail.next = current;
      tail = current;
    }
    current = current.next;
  }
  
  if (tail) {
    tail.next = null;
  }

  return start;
};