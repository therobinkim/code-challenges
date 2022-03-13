/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/*
  2 loops
  1. build linkedlist; store them in Map w/ associations
  2. connect all of the "random" fields
  time complexity: linear
  space complexity: linear
  
  
  
  
  
  
  
  
  
  
*/
var copyRandomList = function(head) {
// v1, w/ mapping
//   const map = new Map();
//   // copy head
//   if(!head) return null;
//   const headCopy = new Node(head.val, null, null);
//   map.set(head, headCopy);
  
//   let original = head;
//   let copy = headCopy;
  
//   // copy rest of list
//   while(original !== null && original.next !== null) {
//     copy.next = new Node(original.next.val, null, null);
//     map.set(original.next, copy.next);
//     original = original.next;
//     copy = copy.next;
//   }
  
//   // assign randoms
//   original = head;
//   copy = headCopy;
//   while(original !== null) {
//     copy.random = map.get(original.random);
//     original = original.next;
//     copy = copy.next;
//   }
  
//   return headCopy;

//////////////////////////////

// v2, w/o mapping
  // A A' B B' C C' D D'
  //                O N
  if(!head) return null;
  let original = head;
  let next = original.next;
  // copy list
  while(next !== null) {
    original.next = new Node(original.val, next, null)
    original = next;
    next = next.next;
  }
  // one more for last node
  original.next = new Node(original.val, null, null);

  // assign randoms
  original = head;
  let copy = head.next;
  // A A' B B' C C' D D'
  //                O C O
  for(original = head, copy = head.next; original; (original = copy.next) && original && (copy = original.next)){
    copy.random = original.random ? original.random.next : null;
  }

  // pluck only copy
  // combined: A A' B B' C C' D D'
  //     copy:   x    x
  //     orig: H N
  const headCopy = head.next;
  for(let node = headCopy; node; (node = node.next) && (head = head.next)) {
    head.next = node.next; // restore original list
    node.next = node.next ? node.next.next : null;
  }
  
  
  return headCopy;
};
