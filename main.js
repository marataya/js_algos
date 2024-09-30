const Graph = require("./binary-trees-graphs/graph/graph");


const g = new Graph()

g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")


g.addEdge("Tokyo", "Dallas")
g.addEdge("Tokyo", "Aspen")
g.addEdge("Aspen", "Dallas")

g.removeVertex("Dallas")

g.printAdjacencyList()