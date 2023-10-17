class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 获取链表长度
  get length() {
    return this.size;
  }

  // 获取链表节点的值
  get traverse() {
    let current = this.head;
    let strList = [];
    while(current) {
      strList.push(current.value);
      current = current.next;
    }

    return strList.join(' -> ');
  }

  append(value) {
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;

      // 找到最后一个节点
      while(current.next) {
        current = current.next;
      }

      // 拿到最后一个节点
      current.next = newNode;
    }

    this.size++;
  }

  insert(value, position) {
    if(position < 0 || position > this.size) return false;

    const newNode = new Node(value);

    if(position === 0) {
      // 如果先让head指向newNode,然后再让newNode.next指向head,那就是自己指向自己,就会造成死循环了
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      
      // 获取到对应的前后节点
      while(index++ < position && current) {
        previous = current;
        current = current.next ?? null;
      }
      
      // 前后节点绑定新节点(用新节点指向下一个节点,防止上一个节点指向新节点后,current节点断掉就被内存回收了)
      newNode.next = current;
      previous.next = newNode;
    }

    this.size++;
    return true;
  }

  removeAt(position) {
    if(position < 0 || position >= this.size) return null;

    let current = this.head;

    if(position === 0) {
      this.head = current.next ?? null;  
    } else {
      let previous = null;
      let index = 0;

      while(index++ < position && current) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next ?? null;
    }

    this.size--;

    return current.value ?? null;
  }

  get(position) {
    // 边缘处理
    if(position < 0 || position >= this.size) return null;

    let current = this.head;
    let index = 0;

    while(index++ < position && current) {
      current = current.next;
    }

    return current.value ?? null;
  }

  update(position, value) {
    if(position < 0 || position >= this.size) return false;

    let current = this.head;
    let index = 0;

    while(index++ < position && current) {
      current = current.next;
    }

    current.value = value

    return true;
  }

  indexOf(value) {
    let index = 0;
    let current = this.head;
    
    while(current) {
      if(current.value === value) {
        return index;
      };
      index++;
      current = current.next;
    }

    return -1;
  }

  remove(value) {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  get isEmpty() {
    return this.size === 0;
  }
}

const linkedList = new LinkedList();
linkedList.append('abc');
linkedList.append('cba');
linkedList.append('nba');
linkedList.append('dba');
linkedList.insert('insert 0', 0);
linkedList.insert('insert 4', 4);

linkedList.update(2, 'change data')

console.log('根据索引获取节点:', linkedList.get(2));

console.log('删除节点:', linkedList.removeAt(0));

console.log('删除节点:', linkedList.removeAt(3));

console.log('查找节点索引:', linkedList.indexOf('change data'));

console.log('根据值删除节点:', linkedList.remove('dba'));

console.log('是否为空:', linkedList.isEmpty);

console.log('链表长度:', linkedList.size);

console.log('链表内容:', linkedList.traverse);

export default LinkedList;