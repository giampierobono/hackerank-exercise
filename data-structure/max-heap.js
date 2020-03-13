class MaxHeap {
  constructor() {
    this.heap = []; //i -> i * 2 + 1 and i * 2 + 2
  }

  getMax() {
    return this.heap[0]; // O(1)
  }

  bubbleUp() {
    let pointer = this.heap.length - 1;

    while (pointer > 0) {
      const parentIndex = Math.floor((pointer - 1) / 2);

      if (this.heap[parentIndex] > this.heap[pointer]) {
        break;
      }

      [this.heap[parentIndex], this.heap[pointer]] = [
        this.heap[pointer],
        this.heap[parentIndex]
      ];
      pointer = parentIndex;
    }
  }

  heapify(position) {
    let left = 2 * position + 1;
    let right = 2 * position + 2;
    let largest = position;
    const length = this.heap.length - 1;

    if (left <= length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }
    if (right <= length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== position) {
      [this.heap[largest], this.heap[position]] = [
        this.heap[position],
        this.heap[largest]
      ];

      this.heapify(largest);
    }
  }

  insert(data) {
    // O(log N)
    this.heap.push(data);
    this.bubbleUp();
  }

  increaseKey(position) {
    // O(log N)
    this.heap[position] = Number.MAX_VALUE;
    [this.heap[position], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[position]
    ];
    this.bubbleUp();
  }

  extractMax() {
    const toReturn = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return toReturn;
  }

  delete(data) {
    const searchedDataIndex = this.heap.indexOf(data);
    if (searchedDataIndex !== -1) {
      this.increaseKey(searchedDataIndex);
      this.extractMax();
    }
  }
}

const heap = new MaxHeap();
heap.insert(4);
heap.insert(5);
heap.insert(3);
heap.insert(6);
heap.insert(1);
heap.insert(9);
heap.insert(7);
heap.delete(9);
heap.delete(7);
heap.delete(3);
heap.delete(4);
heap.insert(8);
heap.insert(4);
heap.insert(12);
heap.insert(24);
heap.insert(1);
console.log(heap.getMax());
