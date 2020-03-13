class MinHeap {
  constructor() {
    this.heap = [];
  }

  getMin() {
    return this.heap[0];
  }

  heapify(position) {
    const left = position * 2 + 1;
    const right = position * 2 + 2;
    let smallest = position;
    const length = this.heap.length - 1;

    if (left < length && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right < length && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== position) {
      [this.heap[position], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[position]
      ];
      this.heapify(smallest);
    }
  }

  extractMin() {
    const toReturn = this.getMin();
    this.heap[0] = this.heap.pop();
    this.heapify(0);
    return toReturn;
  }

  bubbleUp() {
    let currentElementIdx = this.heap.length - 1;

    const bubbleUpRecursive = currentIdx => {
      if (currentIdx === 0) {
        return;
      }
      const parentIndex = Math.floor((currentIdx - 1) / 2);
      if (this.heap[parentIndex] > this.heap[currentIdx]) {
        [this.heap[parentIndex], this.heap[currentIdx]] = [
          this.heap[currentIdx],
          this.heap[parentIndex]
        ];
        bubbleUpRecursive(parentIndex);
      }
    };

    bubbleUpRecursive(currentElementIdx);
  }

  decrementKey(position) {
    this.heap[position] = Number.MIN_SAFE_INTEGER;
    [this.heap[position], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[position]
    ];
    this.bubbleUp();
  }

  delete(data) {
    const dataIndex = this.heap.indexOf(data);
    if (dataIndex !== -1) {
      this.decrementKey(dataIndex);
      this.extractMin();
    }
  }

  insert(data) {
    this.heap.push(data);

    if (this.heap.length > 1) {
      this.bubbleUp();
    }
  }
}

const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(0);
minHeap.insert(2);
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(7);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(9);
minHeap.insert(12);
minHeap.delete(8);
minHeap.delete(12);
minHeap.insert(3);
minHeap.delete(6);
minHeap.delete(9);
minHeap.delete(5);
minHeap.delete(3);
minHeap.delete(2);
minHeap.delete(1);
minHeap.delete(0);
console.log(minHeap.heap);
