class Queue {
  constructor() {
    this.entries = [];
    this.rear = -1;
  }

  enqueue(data) {
    this.rear++;
    this.entries[this.rear] = data; // this.entries.push(data)
  }

  dequeue() {
    const toReturn = this.entries[0];
    this.entries = this.entries.slice(1, this.entries.length);
    this.rear--;
    return toReturn;
  }

  isEmpty() {
    return this.entries.length === 0;
  }
}

class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.edges = new Map();
  }

  addVertex(vertex) {
    if (this.edges.size === this.numOfVertices) {
      throw new Error("max num of vertices reached");
    }
    this.edges.set(vertex, []);
  }

  addEdge(from, to) {
    if (!this.edges.has(from) || !this.edges.has(to)) {
      throw new Error("missing one vertex");
    }
    this.edges.get(from).push(to);
    this.edges.get(to).push(from);
  }

  breadthFirstTraversal(rootNode) {
    const visitedNodes = new Map();
    const queue = new Queue();

    queue.enqueue(rootNode);
    visitedNodes.set(rootNode, true);

    while (!queue.isEmpty()) {
      const currentElement = queue.dequeue();
      console.log(currentElement);
      const adjList = this.edges.get(currentElement);

      adjList.forEach(adj => {
        if (!visitedNodes.has(adj)) {
          visitedNodes.set(adj, true);
          queue.enqueue(adj);
        }
      });
    }
  }
}

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

g.breadthFirstTraversal("A");
