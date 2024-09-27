function recDepthFirstTraversal(root) {
  const result = []
  function traverse(node) {
    if (node != null) {
      result.push(node.data)
      traverse(node.left)
      traverse(node.right)
    }
  }

  traverse(root)
  return result
}

module.exports = recDepthFirstTraversal