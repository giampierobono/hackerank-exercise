// remove duplicates from unsorted linked list

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
    const findLast = node => (node.next === null ? node : findLast(node.next));

    if (this.head === null) {
      this.head = new Node(data);
    } else {
      findLast(this.head).next = new Node(data);
    }
    this.size++;
  }

  addMany(arrayOfValues) {
    arrayOfValues.forEach(value => this.add(value));
  }

  empty() {
    this.head = null;
    this.size = 0;
  }

  deleteNext(node) {
    const prev = node;
    const search = prev.next;
    prev.next = search.next;
    search.next = null;
    this.size--;
  }

  deleteByData(data) {
    const findPrevSearchedNode = (node, data) =>
      node.next !== null && node.next.data === data
        ? node
        : findPrevSearchedNode(node.next, data);

    if (this.head === null) {
      return false;
    }

    this.deleteNext(findPrevSearchedNode(this.head, data));
    return true;
  }

  // space complexity O(1), time complexity O(N^2)
  removeDuplicatesNoBuffer() {
    const removeDuplicatesNoBufferRecursive = (data, currentNode) => {
      if (currentNode === null) {
        return;
      }

      if (currentNode.next && currentNode.next.data === data) {
        this.deleteNext(currentNode);
        removeDuplicatesNoBufferRecursive(data, currentNode);
      } else {
        removeDuplicatesNoBufferRecursive(data, currentNode.next);
      }
    };

    const loopOnListRecursive = node => {
      if (node === null) {
        return;
      }

      removeDuplicatesNoBufferRecursive(node.data, node);
      loopOnListRecursive(node.next);
    };

    loopOnListRecursive(this.head);
  }

  // space complexity O(N) (Set needed to store occurrencies), time complexity O(N)
  removeDuplicates() {
    const occurrencies = new Set();
    if (this.head === null) {
      return;
    }
    // head -> x 1 1 2
    const removeDuplicatesRecursive = node => {
      if (node === null) {
        return;
      }
      occurrencies.add(node.data);
      if (node.next && occurrencies.has(node.next.data)) {
        this.deleteNext(node);
        removeDuplicatesRecursive(node);
      } else {
        removeDuplicatesRecursive(node.next);
      }
    };

    removeDuplicatesRecursive(this.head);
  }
}

const linkedList = new LinkedList();
// prettier-ignore
linkedList.addMany([1,1,1,1,1,1,1,1,2,3,2,3,4,5,6,6,6,6,6,4,34,3,5,63,45,56,1,1,1,2,2,2,2,2]);
linkedList.removeDuplicatesNoBuffer();
linkedList.empty();
// prettier-ignore
linkedList.addMany([1,1,1,1,1,1,1,1,2,3,2,3,4,5,6,6,6,6,6,4,34,3,5,63,45,56,1,1,1,2,2,2,2,2]);
linkedList.removeDuplicates();
console.log(linkedList);
