class Arr {
  constructor() {
    this.len = 0;
    this.val = {};
  }

  get values() {
    return this.val;
  }

  get length() {
    return this.len;
  }

  push(val) {
    this.val[this.length] = val;
    this.len += 1;
  }

  pop() {
    this.len -= 1;
    const result = this.val[this.length];
    delete this.val[this.length];
    return result;
  }

  unshift(val) {
    for (let i = this.length - 1; i > 0; i -= 1) {
      this.val[i + 1] = this.val[i];
    }
    this.len += 1;
    this.val[0] = val;
  }

  shift() {
    let result = this.val[0];
    let len = this.length;
    for (let i = 0; i < len; i += 1) {
      this.val[i] = this.val[i + 1];
    }

    delete this.val[len - 1];
    this.len -= 1;
    return shift;
  }

  forEach(callback) {
    for (let i = 0; i < this.length; i += 1) {
      callback(this.values[i]);
    }
  }
}