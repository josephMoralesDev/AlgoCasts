// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(value) {
    this.data = value;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(nodeValue) {
    this.parentNode = new Node(nodeValue);
  }

  traverseDF(action) {
    let que = [this.parentNode];

    while (que.length) {
      let r = que.shift();
      if (r.children) {
        que.unshift(...r.children);
      }
      action(r);
    }
  }

  traverseBF(action) {
    let que = [this.parentNode];

    while (que.length) {
      let r = que.unshift();
      if (r.children) {
        que.push(...r.children);
      }
      action(r)
    }
  }
}

module.exports = { Tree, Node };
