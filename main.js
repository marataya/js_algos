const depthFirstTraversal = require("./binary-trees-graphs/depth-first-traversal");
const Node = require("./binary-trees-graphs/node");

const root = new Node('a');
const nodeB = new Node('b');
const nodeC = new Node('c');
const nodeD = new Node('d');
const nodeE = new Node('e');
const nodeF = new Node('f');

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

console.log(depthFirstTraversal(root))