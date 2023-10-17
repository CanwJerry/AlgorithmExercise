class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  if(head === null || head.next === null) return head;
  
  const newHead = reverseList(head.next);

  // 难,不理解
  head.next.next = head;
  head.next = null;

  return newHead;
}

const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);

 const newHead = reverseList(node);

 let current = newHead;
 while(current) {
  console.log(current.value);
  current = current.next;
 }