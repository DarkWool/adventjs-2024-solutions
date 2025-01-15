/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
function treeHeight(tree) {
  if (!tree) return 0;

  const leftHeight = 1 + treeHeight(tree.left);
  const rightHeight = 1 + treeHeight(tree.right);

  return Math.max(leftHeight, rightHeight);
}
