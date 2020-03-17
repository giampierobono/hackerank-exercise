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
      throw new Error("Cannot create edge because of missing vertex");
    }

    this.vertices.get(from).push(to);
    this.vertices.get(to).push(from);
  }

  depthFirstTraversal(rootNode) {
    const visitedNodes = new Map();

    const depthFirstTraversalRecursive = vertex => {
      const adjList = this.vertices.get(vertex);
      visitedNodes.set(vertex, true);
      console.log(vertex);

      adjList.forEach(adj => {
        if (!visitedNodes.has(adj)) {
          visitedNodes.set(adj, true);
          depthFirstTraversalRecursive(adj);
        }
      });
    };

    depthFirstTraversalRecursive(rootNode);
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

g.depthFirstTraversal("A");
