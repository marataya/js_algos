const Stack = require("./stack")

function depthFirstTraversal(root) {
    if (!root) {
        return []
    }

    const result = []
    const stack = new Stack()

    stack.push(root)

    while(!stack.isEmpty()) {
        const current = stack.pop()

        result.push(current.data)

        if (current.right) {
            stack.push(current.right)
        }
        if (current.left) {
            stack.push(current.left)
        }
        
    }

    return result


}


module.exports = depthFirstTraversal