/*
Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

var invertTree = function (root) {
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    if (node !== null) {
      if (node.left || node.right) {
        swap(node);
      }
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }

  return root;
};

const swap = (node) => {
  let temp = node.right;
  node.right = node.left;
  node.left = temp;
};
