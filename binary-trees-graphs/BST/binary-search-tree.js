const Node = require("../node")

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        const node = new Node(data)
        if (this.root === null) this.root = node
        else {
            let current = this.root

            while (true) {
                if (data < current.data) {
                    if (!current.left) {
                        current.left = node
                        return this
                    }
                    current = current.left
                } else {
                    if (!current.right) {
                        current.right = node
                        return this
                    }
                    current = current.right
                }
            }
        }
    }

    lookup(data) {
        if (!this.root) return null

        let current = this.root


        while (current) {
            if (data < current.data) {
                current = current.left
            } else if (data > current.data){
                    current = current.right
            } else if (data === current.data) {
                return current
            }
        }

        return null
    }
    
    remove(data) {
        const removeNode = (node, data) => {
            if (node === null) return null
            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeNode(node.right, data)
                return node
            } else {
                if (node.left === null) {
                    return node.right
                } else if (node.right === null) {
                    return node.left
                }

                const tempNode = node.right
                while( tempNode.left != null) {
                    tempNode = tempNode.left
                }

                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }

    printTree() {
        const printNode = (node) => {
            if (node === null) return
    
            printNode(node.left)
            console.log(node.data);
            printNode(node.right)
        }
    
        printNode(this.root)
    }
    
}



module.exports = BinarySearchTree