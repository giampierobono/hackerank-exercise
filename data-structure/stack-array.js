class Stack {
  // LIFO stack
  constructor() {
    this.top = -1;
    this.stack = [];
    this.length = 0;
  }

  push(data) {
    this.top++;
    this.stack[this.top] = data;
    this.length++;
  }

  pop() {
    // this.stack.pop(); TOO EASY
    if (!this.isEmpty()) {
      const toReturn = this.stack[this.top];
      this.stack.splice(this.top);
      this.top--;
      this.length--;
      return toReturn;
    }
  }

  peek() {
    return this.stack[this.top];
  }

  isEmpty() {
    return this.length === 0;
  }
}

const stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
console.log("peek: ", stack.peek());
console.log("stack: ", stack.stack);
console.log("length: ", stack.length);
stack.pop();
console.log("peek: ", stack.peek());
console.log("stack: ", stack.stack);
console.log("length: ", stack.length);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("peek: ", stack.peek());
console.log("stack: ", stack.stack);
console.log("length: ", stack.length);
