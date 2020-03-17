class Queue {
  constructor() {
    this.entries = [];
  }

  enqueue(data) {
    this.entries.push(data);
  }

  dequeue() {
    const toReturn = this.entries[0];
    this.entries = this.entries.slice(1, this.entries.length);
    return toReturn;
  }

  isEmpty() {
    return this.entries.length === 0;
  }
}

class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.vertices = new Map();
  }

  addVertex(vertex) {
    if (this.vertices.size === this.numOfVertices) {
      throw new Error("max num of vertices reached");
    }

    this.vertices.set(vertex, []);
  }

  addEdge(from, to) {
    if (!this.vertices.has(from) || !this.vertices.has(to)) {
      throw new Error("Cannot create an edge. On of the vertices is missing");
    }

    this.vertices.get(from).push(to);
    this.vertices.get(to).push(from);
  }
}

// breadth first graph travelsal
const routeBetweenNodes = (graph, start, end) => {
  if (start === end) {
    return true;
  }
  const visitedNodes = new Map();
  const queue = new Queue();

  visitedNodes.set(start, true);
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    const element = queue.dequeue();
    const adjList = graph.vertices.get(element);

    for (let i = 0; i < adjList.length; i++) {
      const current = adjList[i];
      if (!visitedNodes.get(current)) {
        if (current === end) {
          return true;
        }
        graph.vertices.set(current, true);
        queue.enqueue(current);
      }
    }
  }
  return false;
};

const g = new Graph(6);
const vertices = ["A", "B", "C", "D", "E", "F"];

vertices.forEach(vertex => g.addVertex(vertex));

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

console.log(routeBetweenNodes(g, "A", "E")); // true
console.log(routeBetweenNodes(g, "A", "Z")); // false
console.log(routeBetweenNodes(g, "B", "C")); // false
console.log(routeBetweenNodes(g, "A", "A")); // true

