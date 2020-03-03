const Node = data => ({
  data,
  next: null
});

const add = head => data => {
  if (head === null) {
    head = Node(data);
  }

  let currentNode = head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = Node(data);

  return head;
};

const remove = head => data => {
  if (head === null) {
    return null;
  }
  let currentNode = head;
  while (currentNode.next !== null) {
    if (currentNode.next.data === data) {
      currentNode.next = currentNode.next.next;
      return head;
    }
    currentNode = currentNode.next;
  }

  return null;
};

const findFirst = head => data => {
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

const findFirstRecursive = head => data => {
  const recursiveSearch = node => {
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

const findAll = head => data => {
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

const length = head => {
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

const lengthRecursive = head => {
  const countRecursive = node =>
    node === null ? 0 : 1 + countRecursive(node.next);

  return countRecursive(head);
};

const removeDuplicates = head => {
  if (head === null) {
    return null;
  }

  const occurrencies = new Map();
  let currentNode = head;

  while (currentNode.next !== null) {
    if (
      currentNode.data === currentNode.next.data ||
      occurrencies.has(currentNode.next.data)
    ) {
      currentNode.next = currentNode.next.next;
    } else {
      occurrencies.set(currentNode.data, true);
      currentNode = currentNode.next;
    }
  }

  return head;
};

const findPreLast = node =>
  node.next !== null && node.next.next === null ? node : findPreLast(node.next);

const moveLastToFront = head => {
  if (head === null) {
    return null;
  }

  const preLast = findPreLast(head);
  const last = preLast.next;

  last.next = head;
  preLast.next = null;
  head = last;

  return head;
};

const createLoop = head => {
  if (head === null) {
    return null;
  }

  const preLast = findPreLast(head);
  preLast.next.next = head;

  return head;
};

const hasLoop = head => {
  if (head === null) {
    return false;
  }

  const occurrencies = new Map();
  let currentNode = head;
  while (currentNode !== null) {
    if (occurrencies.has(currentNode.next)) {
      return true;
    }
    occurrencies.set(currentNode, true);
    currentNode = currentNode.next;
  }

  return false;
};

const LinkedList = head => ({
  add: data => add(head)(data),
  remove: data => remove(head)(data),
  findFirst: data => findFirst(head)(data),
  findFirstRecursive: data => findFirstRecursive(head)(data),
  findAll: data => findAll(head)(data),
  length: () => length(head),
  lengthRecursive: () => lengthRecursive(head),
  removeDuplicates: () => removeDuplicates(head),
  moveLastToFront: () => moveLastToFront(head),
  createLoop: () => createLoop(head),
  hasLoop: () => hasLoop(head)
});

let myLinkedList = null;
myLinkedList = LinkedList(myLinkedList).add(9);
myLinkedList = LinkedList(myLinkedList).add(9);
myLinkedList = LinkedList(myLinkedList).add(9);
myLinkedList = LinkedList(myLinkedList).add(9);
myLinkedList = LinkedList(myLinkedList).add(9);
myLinkedList = LinkedList(myLinkedList).add(9);
myLinkedList = LinkedList(myLinkedList).add(1);
myLinkedList = LinkedList(myLinkedList).add(2);
myLinkedList = LinkedList(myLinkedList).add(3);
myLinkedList = LinkedList(myLinkedList).add(4);
myLinkedList = LinkedList(myLinkedList).add(5);
myLinkedList = LinkedList(myLinkedList).add(5);
myLinkedList = LinkedList(myLinkedList).add(5);
myLinkedList = LinkedList(myLinkedList).add(5);
myLinkedList = LinkedList(myLinkedList).remove(4);
console.log("findFirst(4): ", LinkedList(myLinkedList).findFirst(4));
console.log(
  "findFirstRecursive(4): ",
  LinkedList(myLinkedList).findFirstRecursive(4)
);
console.log("findFirst(2): ", LinkedList(myLinkedList).findFirst(2));
console.log("findFirst(10): ", LinkedList(myLinkedList).findFirst(10));
console.log("findAll: ", LinkedList(myLinkedList).findAll(5));
console.log("length: ", LinkedList(myLinkedList).length());
myLinkedList = LinkedList(myLinkedList).remove(5);
myLinkedList = LinkedList(myLinkedList).remove(5);
myLinkedList = LinkedList(myLinkedList).remove(5);
myLinkedList = LinkedList(myLinkedList).removeDuplicates();
console.log("lengthRecursive: ", LinkedList(myLinkedList).lengthRecursive());
myLinkedList = LinkedList(myLinkedList).moveLastToFront();
console.log("hasLoop: ", LinkedList(myLinkedList).hasLoop());
console.log("createLoop ");
myLinkedList = LinkedList(myLinkedList).createLoop();
console.log("hasLoop: ", LinkedList(myLinkedList).hasLoop());
console.log(myLinkedList);
