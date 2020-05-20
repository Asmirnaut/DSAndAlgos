/* Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order. */

/* Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]] */

var delNodes = function (root, to_delete) {
  let queue = [{ parent: null, node: root, parentSide: null }];
  let result = [];
  let deleted = new Set(to_delete);

  if (!root) return result;
  if (!to_delete.length) return [root];

  while (queue.length) {
    let { node, parent, parentSide } = queue.shift();

    if (deleted.has(node.val)) {
      if (parentSide === 'right') {
        parent.right = null;
      }
      if (parentSide === 'left') {
        parent.left = null;
      }
      node.val = null;
    } else {
      if (!parent || parent.val === null) result.push(node);
    }

    if (node.left)
      queue.push({ parent: node, node: node.left, parentSide: 'left' });
    if (node.right)
      queue.push({ parent: node, node: node.right, parentSide: 'right' });
  }
  return result;
};
