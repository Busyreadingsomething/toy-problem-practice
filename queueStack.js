class QueueStack {
  constructor() {
    this.enStack = [];
    this.deStack = [];
  }

  enqueue(val) {
    const len = this.deStack.length;
    if (len > 0) {
      for (let i = 0; i < len; i += 1) {
        this.enStack.push(this.deStack.pop());
      }
    }
    this.enStack.push(val);
  }

  dequeue() {
    const len = this.enStack.length;
    let val;
    if (len > 0) {
      for (let i = 0; i < len; i += 1) {
        this.deStack.push(this.enStack.pop());
      }
    }
    val = this.deStack.pop();
    return val;
  }
}

const test = new QueueStack();
console.log(test.dequeue() === undefined);
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
console.log(test.dequeue() === 1);
console.log(test.dequeue() === 2);
test.enqueue(5);
test.enqueue(6);
console.log(test.dequeue() === 3);