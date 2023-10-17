class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseList(head) {
  if(head === null) return null;
  if(head.next === null) return head;
  
  const stack = [];
  let current = head;

  while(current) {
    stack.push(current);
    current = current.next;
  }

  const newHead = stack.pop();
  let currentNewHead = newHead;

  while(stack.length) {
    const data = stack.pop();
    // 当前的点指向下一个点
    currentNewHead.next = data;
    // 下一个点指向它的下一个点
    currentNewHead = currentNewHead.next;
  }

  // 最后一个点的next一定要指向null
  currentNewHead.next = null;

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