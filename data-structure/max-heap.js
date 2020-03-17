class MaxHeap {
  constructor() {
    this.heap = []; // left -> 2i + 1, right -> 2i + 2
  }

  insert(data) {
    this.heap.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let pointer = this.heap.length - 1;

    while (pointer > 0) {
      const parentNodeIdx = Math.floor((pointer - 1) / 2);

      if (this.heap[parentNodeIdx] < this.heap[pointer]) {
        [this.heap[parentNodeIdx], this.heap[pointer]] = [
          this.heap[pointer],
          this.heap[parentNodeIdx]
        ];
      }

      pointer = parentNodeIdx;
    }
  }

  extractMax() {
    const max = this.getMax();
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return max;
  }

  heapify(position) {
    const left = 2 * position + 1;
    const right = 2 * position + 2;
    let largest = position;
    const maxIdx = this.size() - 1;

    if (left <= maxIdx && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right <= maxIdx && this.heap[right] > this.heap[largest]) {
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

  increaseKey(index) {
    this.heap[index] = Number.MAX_VALUE;
    [this.heap[index], this.heap[this.size() - 1]] = [
      this.heap[this.size() - 1],
      this.heap[index]
    ];
    this.bubbleUp();
  }

  getMax() {
    return this.heap[0];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  size() {
    return this.heap.length;
  }

  delete(position) {
    this.increaseKey(position);
    this.extractMax();
  }
}

const maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(11);
maxHeap.insert(2);
maxHeap.insert(6);
maxHeap.insert(3);
maxHeap.extractMax();
maxHeap.delete(2);
console.log(maxHeap.heap);
