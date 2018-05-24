class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class PlateStack {
  constructor(limit) {
    this._limit = limit;
    this.size = 0;
    this.index = 0;
    this.list = [];
  }

  push(val) {
    const node = new Node(val);
    if (this.size === this._limit) {
      this.index += 1;
      this.list[this.index] = node;
      this.size = 1;
    } else {
      node.next = this.list[this.index];
      this.list[this.index] = node;
      this.size += 1;
    }
  }

  pop() {
    let val = null;
    if (this.size === 1) {
      val = this.list[this.index];
      this.list[this.index] = val.next;
      val.next = null;
      this.index -= 1;
      this.size = this._limit;
    } else {
      val = this.list[this.index];
      this.list[this.index] = val.next;
      val.next = null;
      this.size -= 1;
    }
    return val;
  }

  peek() {
    return this.list[this.index];
  }
}

const test = new PlateStack(3);
test.push(1);
test.push(2);
test.push(3);
console.log(JSON.stringify(test));
console.log('SIZE:', test.size === 3);
console.log('LIMIT:', test._limit === 3);
console.log('INDEX:', test.index === 0);
test.push(4);
console.log('SIZE:', test.size === 1);
console.log('INDEX:', test.index === 1);
test.push(5);
test.push(6);
console.log('SIZE:', test.size === 3);
console.log('INDEX:', test.index === 1);
console.log('VAL:', test.pop().val === 6);
console.log('SIZE:', test.size === 2);
console.log('INDEX:', test.index === 1);
test.pop();
test.pop();
console.log('SIZE:', test.size === 3);
console.log('INDEX:', test.index === 0);
console.log('PEEK', test.peek().val === 3);