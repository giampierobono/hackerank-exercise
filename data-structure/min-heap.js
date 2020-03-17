class MinHeap {
  constructor() {
    this.heap = []; // left -> 2i + 1, right -> 2i + 2
  }

  insert(data) {
    // O(logN)
    this.heap.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    const bubbleUpRecursive = pointer => {
      if (pointer === 0) {
        return;
      }
      const parentIdx = Math.floor((pointer - 1) / 2);

      if (this.heap[parentIdx] > this.heap[pointer]) {
        [this.heap[parentIdx], this.heap[pointer]] = [
          this.heap[pointer],
          this.heap[parentIdx]
        ];
      }
      bubbleUpRecursive(parentIdx);
    };

    bubbleUpRecursive(this.size() - 1);
  }

  extractMin() {
    const min = this.getMin();
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return min;
  }

  heapify(position) {
    const left = 2 * position + 1;
    const right = 2 * position + 2;
    let lowest = position;

    if (left <= this.size() - 1 && this.heap[left] < this.heap[lowest]) {
      lowest = left;
    }

    if (right <= this.size() - 1 && this.heap[right] < this.heap[lowest]) {
      lowest = right;
    }

    if (lowest !== position) {
      [this.heap[lowest], this.heap[position]] = [
        this.heap[position],
        this.heap[lowest]
      ];

      this.heapify(lowest);
    }
  }

  size() {
    return this.heap.length;
  }

  delete(index) {
    this.decraseKey(index);
    this.extractMin();
  }

  decraseKey(index) {
    this.heap[index] = Number.MIN_VALUE;
    [this.heap[index], this.heap[this.size() - 1]] = [
      this.heap[this.size() - 1],
      this.heap[index]
    ];
    this.bubbleUp();
  }

  getMin() {
    return this.heap[0];
  }
}

const maxHeap = new MinHeap();
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(11);
maxHeap.insert(2);
maxHeap.insert(6);
maxHeap.insert(3);
maxHeap.extractMin();
maxHeap.delete(2);
console.log(maxHeap.heap);
