class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
  }

  findFirst(data) {
    if (this.head === null) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  findAll(data) {
    if (this.head === null) {
      return null;
    }
    const nodes = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        nodes.push(currentNode);
      }
      currentNode = currentNode.next;
    }

    return nodes;
  }

  remove(data) {
    if (this.head === null) {
      return false;
    }

    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.next.data === data) {
        currentNode.next = currentNode.next.next;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
  }

  length() {
    if (this.head === null) {
      return 0;
    }

    let currentNode = this.head;
    let count = 1;

    while (currentNode.next !== null) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  lengthRecursive() {
    const countRecursive = node =>
      node === null ? 0 : 1 + countRecursive(node.next);

    if (this.head === null) {
      return 0;
    }

    return countRecursive(this.head);
  }

  findLast() {
    const findLastRecursive = node =>
      node.next === null ? node : findLastRecursive(node.next);

    return findLastRecursive(this.head);
  }

  createLoop() {
    if (this.head === null) {
      return false;
    }

    this.findLast(this.head).next = this.head.next || this.head;

    return true;
  }

  hasLoops() {
    if (this.head === null) {
      return false;
    }

    const visited = new Set();
    let currentNode = this.head;

    while (currentNode !== null) {
      if (visited.has(currentNode.next)) {
        return true;
      }
      visited.add(currentNode);
      currentNode = currentNode.next;
    }
    return false;
  }

  removeDuplicates() {
    if (this.head === null) {
      return false;
    }

    const occurrencies = new Set();
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (
        currentNode.data === currentNode.next.data ||
        occurrencies.has(currentNode.next.data)
      ) {
        currentNode.next = currentNode.next.next;
      } else {
        occurrencies.add(currentNode.data);
        currentNode = currentNode.next;
      }
    }

    return true;
  }

  moveLastToFront() {
    const findPreLast = node =>
      node.next !== null && node.next.next === null
        ? node
        : findPreLast(node.next);

    if (this.head === null) {
      return false;
    }

    const preLast = findPreLast(this.head);
    if (preLast !== null) {
      const last = preLast.next;
      last.next = this.head;
      this.head = last;
      preLast.next = null;
    }
    return true;
  }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(6);
linkedList.add(6);
linkedList.add(6);
console.log("length: ", linkedList.length());
console.log("lengthRecursive: ", linkedList.lengthRecursive());
console.log("remove(3): ", linkedList.remove(3));
console.log("length: ", linkedList.length());
console.log("lengthRecursive: ", linkedList.lengthRecursive());
console.log("findFirst(3): ", linkedList.findFirst(3));
console.log("findAll(6): ", linkedList.findAll(6));
console.log("moveLastToFront: ", linkedList.moveLastToFront());
console.log("removeDuplicates: ", linkedList.removeDuplicates());
console.log(linkedList);

console.log("hasLoops: ", linkedList.hasLoops());
console.log("createLoop: ", linkedList.createLoop());
console.log("hasLoops: ", linkedList.hasLoops());
