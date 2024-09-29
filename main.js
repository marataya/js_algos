const BinarySearchTree = require("./binary-trees-graphs/BST/binary-search-tree");

const bst = new BinarySearchTree()

bst.insert(9)
bst.insert(4)
bst.insert(2)
bst.insert(8)
bst.insert(5)
bst.insert(11)
bst.insert(12)

bst.remove(8)
bst.printTree()
// console.log(bst.lookup(11))
