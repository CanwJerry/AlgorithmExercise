class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  if(head === null || head.next === null) return head;

  let newHead = null;
  while(head) {
    // current指向的是第一个节点的下一个节点
    const current = head.next;
    // 第一次的时候newHead是null
    head.next = newHead;
    // 将newHead指向下一个节点(head节点往反方向指,就是指向newHead)
    newHead = head;
    // head指向下一个节点
    head = current;
  }

  return newHead;
};

const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);

 const newHead = reverseList(node);

 let current = newHead;
 while(current) {
  console.log(current.value);
  current = current.next;
 }