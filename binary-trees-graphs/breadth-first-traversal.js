const Queue = require("./queue")

function breadthFirstTraversal(root) {
    if (!root) {
        return []
    }

    const result = []

    const queue = new Queue()

    queue.enqueue(root)

    while(!queue.isEmpty()) {
        const current = queue.dequeue()

        result.push(current.data)

        if (current.left) {
            queue.enqueue(current.left)
        }
        
        if (current.right) {
            queue.enqueue(current.right)
        }
        
    }

    return result


}


module.exports = breadthFirstTraversal