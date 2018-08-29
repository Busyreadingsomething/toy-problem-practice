/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this._limit = k;
  this._size = 0;
  this._front = null;
  this._last = null;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this._size === this._limit) return false;
  
  const node = {
    value,
    next: null,
  };
  
  if (this._front === null) {
    this._front = node;
    this._last = node;
    this._last.next = this._front;
  } else {
    node.next = this._front;
    this._front = node;
    this._last.next = this._front;
  }
  
  this._size += 1;
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this._size === this._limit) return false;
  
  const node = {
    value,
    next: null,
  };
  
  if (this._front === null) {
    this._front = node;
    this._last = node;
    this._last.next = this._front;
  } else {
    this._last.next = node;
    this._last = node;
    this._last.next = this._front;
  }

  this._size += 1;
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if (this._size === 0) return false;
  
  if (this._front === this._last) {
    this._front = this._last = null;
  } else {
    this._front = this._front.next;
    this._last.next = this._front;
  }
  
  
  this._size -= 1;
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if (this._size === 0) return false;
  
  if (this._last === this._front) {
    this._front = this._last = null;
  } else {
    let prev = this._front;
    let current = this._front.next;
    
    while (current) {
      if (current.next === this._front) {
        this._last = prev;
        this._last.next = this._front;
        break;
      }
      prev = current;
      current = current.next;
    }
  }
  
  this._size -= 1;
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this._size === 0) return -1;
  
  return this._front.value;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this._size === 0) return -1;
  
  return this._last.value;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this._size === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this._size === this._limit;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = Object.create(MyCircularDeque).createNew(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */