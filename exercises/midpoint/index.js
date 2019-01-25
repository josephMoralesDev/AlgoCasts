// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')

//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c') //slow
//   l.insertLast('d')
//   l.insertLast('c') //fast
//   l.insertLast('d')

//   l.insertLast('c')
//   l.insertLast('b') //slow
//   l.insertLast('c')
//   l.insertLast('d')
//   l.insertLast('e') //fast

//in while
//change slow to next node
//change fast to next next
//if slow count is odd return as is
//if even return slow _> next

//while in while if fast doesnt have a next next or next, return slow
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

module.exports = midpoint;
