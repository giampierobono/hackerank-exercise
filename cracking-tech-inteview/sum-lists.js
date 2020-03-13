// input 2 lists: (7 -> 1 -> 6) + (5 -> 9 -> 2) = 617 + 295 => (2 -> 1 -> 9)

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
    const findLastRecursive = node =>
      node.next === null ? node : findLastRecursive(node.next);
    if (this.head === null) {
      this.head = new Node(data);
    } else {
      findLastRecursive(this.head).next = new Node(data);
    }

    this.size++;
  }

  addMany(values) {
    (values || []).forEach(value => this.add(value));
  }

  convertIntoNumber() {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }

    let counter = 1;
    let result = 0;
    while (currentNode !== null) {
      result = result + counter * currentNode.data;
      counter *= 10;
      currentNode = currentNode.next;
    }

    return result;
  }

  fillFromNumber(number) {
    this.head = null;

    while (Math.floor(number) !== 0) {
      this.add(number % 10);
      number = Math.floor(number / 10);
    }
  }
}

const firstList = new LinkedList();
firstList.addMany([7, 1, 6]);
const secondList = new LinkedList();
secondList.addMany([5, 9, 2]);

const resultList = new LinkedList();
resultList.fillFromNumber(
  firstList.convertIntoNumber() + secondList.convertIntoNumber()
);
console.log(resultList);
