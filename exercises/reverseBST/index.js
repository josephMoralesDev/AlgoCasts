function reverseBST(root) {
  if (root == null) {
      return;
  }

  temp = root.right;
  root.right = root.left;
  root.left = temp;

  reverseBST(root.left);
  reverseBST(root.right);

  return root;
}

module.exports = reverseBST;
