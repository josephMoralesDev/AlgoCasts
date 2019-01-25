// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const temp = new Node(value);
    temp.next = this.head;
    this.head = temp;
  }

  // 1 -> 2 -> 4 -> 7
  // 1 - size
  // 1 - temp
  size() {
    if (!this.head) {
      return 0;
    }

    let size = 1;
    let temp = this.head;

    while (temp.next) {
      size++;
      temp = temp.next;
    }

    return size;

  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    return temp;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  // 1 -> 2 -> 4 -> 7
  // 4 - prev
  // 7 - temp

  removeLast() {

    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let temp = this.head.next;

    while(temp.next) {
      prev = prev.next;
      temp = temp.next;
    }

    prev.next = null;
  }

  // 1 -> 2 -> 4 -> 7

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  // 1 -> 2 -> 4 -> 7
  // 1 - index
  // 1 - counter
  // 2 - temp

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    let requestedNode = this.getAt(index);

    if (!requestedNode) {
      return;
    }

    if (requestedNode) {
      let prevNode = this.getAt(index - 1);
      if (prevNode) {
        prevNode.next = requestedNode.next;
      } else {
        this.head = requestedNode.next;
      }
    }
  }

  //1 -> 2 -> 3 -> 4

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;

  }
}

module.exports = { Node, LinkedList };
