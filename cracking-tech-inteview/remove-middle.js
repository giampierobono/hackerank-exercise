class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const findLast = node =>
      node && node.next === null ? node : findLast(node.next);

    if (this.head === null) {
      this.head = new Node(data);
    } else {
      findLast(this.head).next = new Node(data);
    }
    this.size++;
  }

  addMany(values) {
    (values || []).forEach(value => this.add(value));
  }

  deleteNode(node) {
    if (this.head === null || this.head === node || node.next === null) {
      return false;
    }

    const findPrevNode = prev =>
      prev && prev.next && prev.next === node ? prev : findPrevNode(prev.next);

    const prev = findPrevNode(this.head);
    const toDelete = prev.next;
    prev.next = toDelete.next;
    toDelete.next = null;
    this.size--;
    return false;
  }

  get(position) {
    if (position < 0) {
      return null;
    }

    let currentElement = this.head;

    for (let i = 0; i < position && currentElement.next !== null; i++) {
      currentElement = currentElement.next;
    }

    return currentElement;
  }
}

const linkedList = new LinkedList();
linkedList.addMany([1, 2, 3, 4, 5, 6, 7]);
linkedList.deleteNode(linkedList.get(4));
linkedList.deleteNode(linkedList.get(0)); // should not remove head
linkedList.deleteNode(linkedList.get(6)); // should not remove last
console.log(linkedList);
