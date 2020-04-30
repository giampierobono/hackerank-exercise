const Node = (data) => ({
  data,
  next: null,
});

const add = (head) => (data) => {
  if (head === null) {
    return Node(data);
  }

  const clonedHead = { ...head };
  let currentNode = clonedHead;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = Node(data);

  return clonedHead;
};

const remove = (head) => (data) => {
  if (head === null) {
    return null;
  }
  const clonedHead = { ...head };
  let currentNode = clonedHead;
  while (currentNode.next !== null) {
    if (currentNode.next.data === data) {
      currentNode.next = currentNode.next.next;
      return clonedHead;
    }
    currentNode = currentNode.next;
  }

  return clonedHead;
};

const findFirst = (head) => (data) => {
  if (head === null) {
    return null;
  }
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.data === data) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }
  return null;
};

const findFirstRecursive = (head) => (data) => {
  const recursiveSearch = (node) => {
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      return node;
    }

    return recursiveSearch(node.next);
  };

  return recursiveSearch(head);
};

const findAll = (head) => (data) => {
  if (head === null) {
    return null;
  }

  const nodes = [];
  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.data === data) {
      nodes.push(currentNode);
    }
    currentNode = currentNode.next;
  }
  return nodes;
};

const length = (head) => {
  if (head === null) {
    return 0;
  }

  let currentNode = head;
  let count = 1;

  while (currentNode.next !== null) {
    count++;
    currentNode = currentNode.next;
  }

  return count;
};

const lengthRecursive = (head) => {
  const countRecursive = (node) =>
    node === null ? 0 : 1 + countRecursive(node.next);

  return countRecursive(head);
};

const removeDuplicates = (head) => {
  if (head === null) {
    return null;
  }

  const occurrences = new Map();
  const clonedHead = { ...head };
  let currentNode = clonedHead;

  while (currentNode.next !== null) {
    if (
      currentNode.data === currentNode.next.data ||
      occurrences.has(currentNode.next.data)
    ) {
      currentNode.next = currentNode.next.next;
    } else {
      occurrences.set(currentNode.data, true);
      currentNode = currentNode.next;
    }
  }

  return clonedHead;
};

const findPreLast = (node) =>
  node.next !== null && node.next.next === null ? node : findPreLast(node.next);

const moveLastToFront = (head) => {
  if (head === null) {
    return null;
  }

  let clonedHead = { ...head };
  const preLast = findPreLast(clonedHead);
  const last = preLast.next;

  last.next = clonedHead;
  preLast.next = null;
  clonedHead = last;

  return clonedHead;
};

const createLoop = (head) => {
  if (head === null) {
    return null;
  }

  const clonedHead = { ...head };
  const preLast = findPreLast(clonedHead);
  preLast.next.next = clonedHead;

  return clonedHead;
};

const hasLoop = (head) => {
  if (head === null) {
    return false;
  }

  const occurrences = new Map();
  let currentNode = head;
  while (currentNode !== null) {
    if (occurrences.has(currentNode.next)) {
      return true;
    }
    occurrences.set(currentNode, true);
    currentNode = currentNode.next;
  }

  return false;
};

const LinkedList = () => {
  let head = null;

  const setHead = (newHead) => (head = newHead);
  const getHead = () => head;

  return {
    getHead,
    add: (data) => setHead(add(getHead())(data)),
    remove: (data) => setHead(remove(getHead())(data)),
    findFirst: (data) => findFirst(getHead())(data),
    findFirstRecursive: (data) => findFirstRecursive(getHead())(data),
    findAll: (data) => findAll(getHead())(data),
    length: () => length(getHead()),
    lengthRecursive: () => lengthRecursive(getHead()),
    removeDuplicates: () => setHead(removeDuplicates(getHead())),
    moveLastToFront: () => setHead(moveLastToFront(getHead())),
    createLoop: () => setHead(createLoop(getHead())),
    hasLoop: () => hasLoop(getHead()),
    toString: () => JSON.stringify(getHead(), null, 2),
  };
};

let myLinkedList = LinkedList();
myLinkedList.add(9);
myLinkedList.add(9);
myLinkedList.add(9);
myLinkedList.add(9);
myLinkedList.add(9);
myLinkedList.add(9);
myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.add(4);
myLinkedList.add(5);
myLinkedList.add(5);
myLinkedList.add(5);
myLinkedList.add(5);

console.log("findFirst(4): ", myLinkedList.findFirst(4));
console.log("findFirstRecursive(4): ", myLinkedList.findFirstRecursive(4));
myLinkedList.remove(4);

console.log("findFirst(2): ", myLinkedList.findFirst(2));
console.log("findFirst(10): ", myLinkedList.findFirst(10));
console.log("findAll: ", myLinkedList.findAll(5));
console.log("length: ", myLinkedList.length());
myLinkedList.remove(5);
myLinkedList.remove(5);
myLinkedList.remove(5);
myLinkedList.removeDuplicates();
console.log("lengthRecursive: ", myLinkedList.lengthRecursive());
console.log(myLinkedList.toString());
console.log("moving last element to front");
myLinkedList.moveLastToFront();
console.log(myLinkedList.toString());
console.log("hasLoop: ", myLinkedList.hasLoop());
console.log("createLoop ");
myLinkedList.createLoop();
console.log("hasLoop: ", myLinkedList.hasLoop());
