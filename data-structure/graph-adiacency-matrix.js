class Graph {
  constructor(maxVertices) {
    this.adiacencies = [];
    this.maxVertices = maxVertices;
    this.nodesMap = new Map();
  }

  addVertex(vertexValue) {
    this.adiacencies.push(new Array(this.maxVertices).fill(0));
    this.nodesMap.set(vertexValue, this.adiacencies.length - 1);
  }

  addEdge(from, to) {
    this.adiacencies[this.nodesMap.get(from)][this.nodesMap.get(to)] = 1;
    this.adiacencies[this.nodesMap.get(to)][this.nodesMap.get(from)] = 1;
  }

  printGraph() {
    let resut = "";
    const iterator = this.nodesMap.keys();
    this.adiacencies.forEach(
      edges => (resut += iterator.next().value + " -> " + edges + "\n")
    );
    console.log(resut);
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
