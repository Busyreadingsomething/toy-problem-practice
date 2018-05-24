class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MinStack {
  constructor() {
    this.reg = [];
    this.min = [];
  }

  push(val) {
    this.reg.push(val);
    if (val < this.getMin() || this.min.length === 0) {
      this.min.push(val);
    }
  }

  pop() {
    let val = null;
    if (this.reg.length) {
      val = this.reg.pop();
    }
    // check to see if the min has a length and if the top value of min is equal to value
    if (this.min.length && this.getMin() === val) {
      this.min.pop();
    }
    return val;
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}

const test = new MinStack();
test.push(1);
test.push(2);
test.push(3);
console.log(JSON.stringify(test));
test.pop();
test.pop();
console.log(JSON.stringify(test));
console.log(test.pop() === 1);
console.log(JSON.stringify(test));

const test2 = new MinStack();
test2.push(9);
test2.push(8);
test2.push(7);
console.log(JSON.stringify(test2));
console.log(test2.pop() === 7);
test2.pop();
console.log(JSON.stringify(test2));
console.log(test2.pop() === 9);
console.log(JSON.stringify(test2));