class Queue {
  constructor() {
    this.entries = [];
    this.rearPoiner = -1;
    this.frontPointer = 0;
  }

  enqueue(data) {
    this.entries.push(data);
    this.rearPoiner++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }

    this.rearPoiner--;
    return this.entries.shift();
  }

  front() {
    return this.entries[this.frontPointer];
  }

  rear() {
    return this.entries[this.rearPoiner];
  }

  isEmpty() {
    return this.entries.length === 0;
  }

  printQueue() {
    console.log(
      this.entries.reduce((acc, curr) => {
        acc = acc + " " + curr;
        return acc;
      }, "")
    );
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.front());
console.log(queue.rear());
console.log(queue.isEmpty());
console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
