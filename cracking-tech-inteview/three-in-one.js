class FixedSizeMultiStack {
  constructor() {
    this.maxSupportedStacks = 3;
    this.maxStacksSize = 9;
    this.stacks = new Array(this.maxStacksSize);
    this.totalElements = 0;
    this.sizes = [0, 0, 0];
  }

  push(stackNum, data) {
    if (this.isFull(stackNum)) {
      throw Error("Max full size reached for stack: " + stackNum);
    }
    this.stacks[this.indexOfTop(stackNum)] = data;
    this.sizes[stackNum - 1]++;
    this.totalElements++;
  }

  pop(stackNum) {
    if (this.isEmpty(stackNum)) {
      return;
    }
    const sizeEachStack = this.maxStacksSize / this.maxSupportedStacks;
    const offset = (stackNum - 1) * sizeEachStack - 1;
    const toReturn = this.stacks[this.sizes[stackNum - 1] + offset];
    this.stacks[this.sizes[stackNum - 1] + offset] = undefined;
    this.sizes[stackNum - 1]--;
    return toReturn;
  }

  isFull(stackNum) {
    return (
      this.sizes[stackNum - 1] > this.maxStacksSize / this.maxSupportedStacks
    );
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum - 1] === 0;
  }

  peek(stackNum) {
    return this.stacks[this.indexOfTop(stackNum) - 1];
  }

  indexOfTop(stackNum) {
    const sizeEachStack = this.maxStacksSize / this.maxSupportedStacks;
    return (stackNum - 1) * sizeEachStack + this.sizes[stackNum - 1];
  }
}

class StackInfo {
  constructor(stackNum) {
    this.startIndex = undefined;
    this.size = 0;
    this.stackNum = stackNum;
  }
}

class DynamicSizeMultiStack {
  constructor() {
    this.countStacks = 0;
    this.entries = [];
    this.stacksInfo = [];
  }

  push(stackNum, data) {
    if (!this.stackExist(stackNum)) {
      this.createNewStack(stackNum);
    }
    const lastIndex = this.getLastIndex(stackNum);
    this.entries = this.entries[lastIndex + 1]
      ? [
          ...this.entries.slice(0, lastIndex + 1),
          data,
          ...this.entries.slice(lastIndex + 1, this.entries.length)
        ]
      : [...this.entries, data];
    this.stacksInfo[stackNum - 1].size++;
    if (this.entries[this.getLastIndex(stackNum) + 1]) {
      this.stacksInfo[stackNum].startIndex++;
    }
  }

  pop(stackNum) {
    if (this.stackExist(stackNum)) {
      const currentStackInfo = this.stacksInfo[stackNum - 1];
      const indexToRemove = this.getLastIndex(stackNum);
      this.entries = [
        ...this.entries.slice(0, indexToRemove),
        ...this.entries.slice(indexToRemove + 1, this.entries.length)
      ];
      currentStackInfo.size--;
      if (this.stackExist(stackNum + 1)) {
        const nextStack = this.stacksInfo[stackNum];
        nextStack.startIndex--;
      }
    }
  }

  stackExist(stackNum) {
    return !!this.stacksInfo[stackNum - 1];
  }

  getLastIndex(stackNum) {
    const currentStackInfo = this.stacksInfo[stackNum - 1];
    if (!currentStackInfo) {
      return -1;
    }

    if (currentStackInfo.startIndex > 0) {
      return currentStackInfo.startIndex + currentStackInfo.size - 1;
    } else if (currentStackInfo.size > 0) {
      return currentStackInfo.size - 1;
    }
    return currentStackInfo.size;
  }

  createNewStack(stackNum) {
    this.stacksInfo[stackNum - 1] = new StackInfo(stackNum);
    this.stacksInfo[stackNum - 1].startIndex = this.entries.length;
  }
}

const stack = new FixedSizeMultiStack();
stack.push(1, 1);
stack.push(1, 1);
stack.push(1, 1);
stack.push(2, 2);
stack.push(2, 2);
stack.push(2, 2);
stack.push(3, 3);
stack.push(3, 3);
stack.push(3, 3);
console.log(stack.pop(2));
console.log(stack.peek(2));
console.log(stack.pop(2));
console.log(stack.pop(2));
console.log(stack.pop(2));
console.log(stack.stacks);

const dynStack = new DynamicSizeMultiStack();
dynStack.push(1, 1);
dynStack.push(1, 1);
dynStack.push(1, 1);
dynStack.push(2, 2);
dynStack.push(2, 2);
dynStack.push(2, 2);
dynStack.push(1, 10);
dynStack.push(3, 3);
dynStack.push(3, 3);
dynStack.push(3, 3);
dynStack.push(2, 20);
dynStack.push(3, 3);
dynStack.push(3, 3);
dynStack.push(1, 10);
dynStack.push(2, 20);
dynStack.push(2, 20);
dynStack.push(2, 20);
dynStack.pop(1);
dynStack.pop(1);
dynStack.pop(1);
dynStack.pop(1);
dynStack.pop(2);
dynStack.pop(2);
dynStack.pop(2);
dynStack.pop(2);
dynStack.pop(2);
dynStack.pop(2);
dynStack.pop(2);
console.log(dynStack.entries);
