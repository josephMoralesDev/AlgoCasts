// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.data && this.left) {
      this.left.insert(value);
    }
    else if (value < this.data) {
      this.left = new Node(value);
    }
    else if (value > this.data && this.right) {
      this.right.insert(value);
    }
    else {
      this.right = new Node(value);
    }
  }

  // contains(value) {
  //   let que = [this];

  //   while (que.length) {
  //     let r = que.shift();

  //     if (r.data === value) return r;
  //     if (r.right) que.unshift(r.right);
  //     if (r.left) que.unshift(r.left);
  //   }

  //   return null;
  // }

  contains(value) {

    if (this.data === value) return this;
    if (value < this.data && this.left) {
      return this.left.contains(value);
    }
    if (value > this.data && this.right) {
      return this.right.contains(value);
    }

    if (this.data === null) return null;
  }
}

module.exports = Node;
