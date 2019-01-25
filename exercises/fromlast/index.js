// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
// 0 - n
//    list.insertLast('a');
//    list.insertLast('b'); //s
//    list.insertLast('c');
//    list.insertLast('d'); //f
//    fromLast(list, 2).data

// have a while loop that subtract 1 from n until == 0
// while doing that, have a fast var that continously goes next
// create a slow variable that starts at head
// while fast -> next
// move along nodes
// finally, return slow

function fromLast(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    n--;
    fast = fast.next;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
