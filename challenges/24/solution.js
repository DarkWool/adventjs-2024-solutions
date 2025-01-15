/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  function dfs(node1, node2) {
    if (!node1?.value && !node2?.value) return true;
    if (node1?.value !== node2?.value) return false;

    const left = dfs(node1.left, node2.right);
    const right = dfs(node1.right, node2.left);

    return left && right ? true : false;
  }

  const areSync = dfs(tree1, tree2);
  return [areSync, tree1.value];
}
