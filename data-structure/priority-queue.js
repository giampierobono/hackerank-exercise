class MaxHeap {
  constructor() {
    this.heap = []; // left -> 2i + 1, right -> 2i + 2
  }

  insert(data) {
    this.heap.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    const bubbleUpRecursive = position => {
      if (position === 0) {
        return;
      }
      const parentIdx = Math.floor((position - 1) / 2);
      if (this.heap[parentIdx] < this.heap[this.size() - 1]) {
        [this.heap[parentIdx], this.heap[this.size() - 1]] = [
          this.heap[this.size() - 1],
          this.heap[parentIdx]
        ];
      }
      position = parentIdx;
      bubbleUpRecursive(position);
    };

    bubbleUpRecursive(this.size() - 1);
  }

  getMax() {
    return this.heap[0];
  }

  extractMax() {
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return max;
  }

  heapify(position) {
    const left = 2 * position + 1;
    const right = 2 * position + 1;
    let greatest = position;

    if (left <= this.size() - 1 && this.heap[left] > this.heap[greatest]) {
      greatest = left;
    }

    if (right <= this.size() - 1 && this.heap[right] > this.heap[greatest]) {
      greatest = right;
    }

    if (greatest !== position) {
      [this.heap[greatest], this.heap[position]] = [
        this.heap[position],
        this.heap[greatest]
      ];
      this.heapify(greatest);
    }
  }

  size() {
    return this.heap.length;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = new MaxHeap();
  }

  insert(data) {
    // O(logN)
    this.queue.insert(data);
  }

  getMaxPriorityElement() {
    // O(1)
    return this.queue.getMax();
  }

  deleteMaxPriorityElement() {
    // O(logN)
    return this.queue.extractMax();
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.insert(5);
priorityQueue.insert(1);
priorityQueue.insert(10);
console.log(priorityQueue.getMaxPriorityElement());
console.log(priorityQueue.deleteMaxPriorityElement());
console.log(priorityQueue.queue.heap);
