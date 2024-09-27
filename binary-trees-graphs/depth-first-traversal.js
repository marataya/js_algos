function depthFirstTraversal(root) {
    if (!root) {
        return []
    }

    const result = []
    const stack = []

    stack.push(root)

    while(stack.length > 0) {
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