class Stack {
  constructor(capacity) {
    this.top = -1;
    (this.capacity = capacity), (this.arr = new Array(capacity));
  }
}

function isFull(stack) {
  return stack.top == stack.capacity - 1;
}
