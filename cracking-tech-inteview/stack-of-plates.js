class Stack {
  constructor(maxLimit) {
    this.entries = new Array(maxLimit);
    this.stackSize = 0;
    this.headIndex = -1;
    this.maxLimit = maxLimit;
  }

  push(data) {
    if (this.isFull()) {
      throw new Error("Max limited reached");
    }
    this.headIndex++;
    this.entries[this.headIndex] = data;
    this.stackSize++;
  }

  pop() {
    const toReturn = this.entries[this.headIndex];
    this.entries = this.entries.slice(0, this.headIndex);
    this.headIndex--;
    this.stackSize--;
    return toReturn;
  }

  size() {
    return this.stackSize;
  }

  isFull() {
    return this.size() >= this.maxLimit;
  }

  isEmpty() {
    return this.size() === 0;
  }

  removeAt(position) {
    const toReturn = this.entries[position];
    this.entries = [
      ...this.entries.slice(0, position),
      ...this.entries.slice(position + 1, this.size())
    ];
    this.stackSize--;
    this.headIndex--;
    return toReturn;
  }
}

class SetOfStacks {
  constructor(maxElementsPerStack) {
    this.stacks = [];
    this.currentStack = -1;
    this.maxElementsPerStack = maxElementsPerStack;
    this.size = 0;
  }

  push(data) {
    if (this.isStacksSetEmpty() || this.isStackFull(this.currentStack)) {
      this.allocateNewStack();
    }
    this.size++;
    this.stacks[this.currentStack].push(data);
  }

  pop() {
    if (this.isStacksSetEmpty()) {
      throw new Error("Cannon pop from an empty stacks set");
    }

    this.stacks[this.currentStack].pop();
    this.size--;
    if (this.stacks[this.currentStack].isEmpty()) {
      this.dispose();
    }
  }

  dispose() {
    this.stacks = this.stacks.slice(0, this.currentStack);
    this.currentStack--;
  }

  isStacksSetEmpty() {
    return this.stacks.length === 0;
  }

  isStackFull(stackNum) {
    return this.stacks[stackNum].isFull();
  }

  allocateNewStack() {
    this.stacks.push(new Stack(this.maxElementsPerStack));
    this.currentStack++;
  }

  popAt(position) {
    const stackByPosition = this.selectStackIndexByPosition(position);
    if (!this.stacks[stackByPosition]) {
      throw new Error("Position " + position + " not found in stack");
    }

    this.stacks[stackByPosition].removeAt(position % this.maxElementsPerStack);
    this.shiftAllFrom(stackByPosition);
  }

  shiftAllFrom(stackByPosition) {
    let stackCounter = stackByPosition;
    while (this.stacks[stackCounter + 1]) {
      this.stacks[stackCounter].push(this.stacks[stackCounter + 1].removeAt(0));
      stackCounter++;
    }
    if (this.stacks[this.stacks.length - 1].isEmpty()) {
      this.dispose();
    }
  }

  selectStackIndexByPosition(position) {
    return Math.floor(position / this.maxElementsPerStack);
  }
}

const setOfStacks = new SetOfStacks(3);
Array(100)
  .fill(undefined)
  .map((_value, index) => setOfStacks.push(index));
setOfStacks.popAt(90);
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
setOfStacks.popAt(4);
setOfStacks.popAt(34);
setOfStacks.popAt(0);
console.log(setOfStacks.stacks);
