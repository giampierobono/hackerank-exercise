class MinStack {
  constructor() {
    this.entries = [];
    this.minValue = Number.MAX_VALUE;
    this.headIndex = -1;
  }

  push(data) {
    this.headIndex++; 
    this.entries[this.headIndex] = data;
    this.setNewMin(data);
  }

  pop() {
    const toRemove = this.entries[this.headIndex];
    this.entries = this.entries.slice(0, this.headIndex);
    this.headIndex--;
    if (toRemove === this.minValue) {
      this.minValue = Math.min(...this.entries);
    }
  }

  setNewMin(data) {
    this.minValue = Math.min(this.minValue, data);
  }

  getMin() {
    return this.minValue;
  }
}

const minStack = new MinStack();
minStack.push(2);
minStack.push(3);
minStack.push(4);
minStack.push(5);
minStack.push(1);
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.entries);
