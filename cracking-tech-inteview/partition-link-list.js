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

  addMany(values) {
    (values || []).forEach(value => this.add(value));
  }

  partitionListBy(data) {
    const lowers = new LinkedList();
    let lastLowers;
    const greaters = new LinkedList();
    let lastGreater;

    const addToLinkedList = (linkedList, lastPointer, data) => {
      if (!lastPointer) {
        linkedList.add(data);
        lastPointer = linkedList.head;
      } else {
        lastPointer.next = new Node(data);
        lastPointer = lastPointer.next;
      }
      return lastPointer;
    };

    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.data < data) {
        lastLowers = addToLinkedList(lowers, lastLowers, currentNode.data);
      } else {
        lastGreater = addToLinkedList(greaters, lastGreater, currentNode.data);
      }
      currentNode = currentNode.next;
    }

    if (lastLowers) {
      lastLowers.next = greaters.head;
    } else {
      lowers.head = greaters.head;
    }

    return lowers.head;
  }
}

const list = new LinkedList();
list.addMany([1, 5, 3, 4, 2, 5, 6, 7, 8]);
console.log(list.partitionListBy(1));
console.log(list.partitionListBy(5));
console.log(list.partitionListBy(8));
console.log(list.partitionListBy(2));
