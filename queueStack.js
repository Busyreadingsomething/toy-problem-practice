// class QueueStack {
//   constructor() {
//     this.enStack = [];
//     this.deStack = [];
//   }

//   enqueue(val) {
//     const len = this.deStack.length;
//     if (len > 0) {
//       for (let i = 0; i < len; i += 1) {
//         this.enStack.push(this.deStack.pop());
//       }
//     }
//     this.enStack.push(val);
//   }

//   dequeue() {
//     const len = this.enStack.length;
//     let val;
//     if (len > 0) {
//       for (let i = 0; i < len; i += 1) {
//         this.deStack.push(this.enStack.pop());
//       }
//     }
//     val = this.deStack.pop();
//     return val;
//   }
// }

// Implemented a better Queue Stack 100% and Passing
class MyQueue {
  constructor() {
    this.front = [];
    this.back = [];
  }

  push(x) {
    const len = this.front.length;
    for (let i = 0; i < len; i += 1) {
      this.back.push(this.front.pop());
    }
    
    this.back.push(x);
  }

  pop() {
    const len = this.back.length;
    for (let i = 0; i < len; i += 1) {
      this.front.push(this.back.pop());
    }
    
    return this.front.pop();
  }
  peek() {
    if (this.back.length > 0) {
      return this.back[0];
    }
    return this.front[this.front.length - 1];
  }
  
  empty() {
    return this.back.length === 0 && this.front.length === 0;
  };
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