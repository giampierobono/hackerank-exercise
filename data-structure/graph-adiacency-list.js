class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.adiacencies = new Map(); // less memory than matrix
  }

  addVertex(vertex) {
    if (this.adiacencies.size === this.numOfVertices) {
      throw new Error("Max num of vertices reached");
    }
    this.adiacencies.set(vertex, []);
  }

  addEdge(from, to) {
    if (!this.adiacencies.has(from) || !this.adiacencies.has(to)) {
      return "from or to not in graph";
    }

    this.adiacencies.get(from).push(to);
    this.adiacencies.get(to).push(from);
  }

  printGraph() {
    let result = "";
    this.adiacencies.forEach((edges, currentValue) => {
      result += currentValue + " -> " + edges + "\n";
    });
    console.log(result);
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

g.printGraph();
