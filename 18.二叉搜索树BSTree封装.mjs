import btPrint from './btsPrint.mjs';

class Node {
  constructor(value) {
    this.value = value;
    // 左子树
    this.left = null;
    // 右子树
    this.right = null;
    // 当前节点的父节点
    this.parent = null;
  }

  // 判断当前节点是父节点的左子节点
  get isLeft() {
    return !!(this.parent && this.parent.left === this);
  }

  // 判断当前节点是父节点的右子节点
  get isRight() {
    return !!(this.parent && this.parent.right === this);
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  print() {
    btPrint(this.root);
  }

  // 插入根节点
  insert(value) {
    // 创建新节点
    const newNode = new Node(value);

    // 判断是否有根节点
    if(!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 插入非根节点
  insertNode(node, newNode) {
    // 去左边继续查找空白位置
    if(newNode.value < node.value) {
      // node节点的左边已经是空白
      if(node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // 去右边继续查找空白位置
      if(node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  preOrderTraverseNode(node) {
    if(node) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }

  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  inOrderTraverseNode(node) {
    if(node) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }

  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  postOrderTraverseNode(node) {
    if(node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }

  // 层序遍历
  levelOrderTraverse() {
    if(!this.root) return;

    const queue = [];
    queue.push(this.root);

    while(queue.length) {
      const current = queue.shift();
      console.log(current.value);

      if(current.left) {
        queue.push(current.left);
      }

      if(current.right) {
        queue.push(current.right);
      }
    }
  }

  // 查找最大值
  getMaxValue() {
    let current = this.root;

    while(current && current.right) {
      current = current.right;
    }

    return current.value ?? null;
  }

  // 查找最小值
  getMinValue() {
    let current = this.root;

    while(current && current.left) {
      current = current.left
    }

    return current.value ?? null;
  }

  // 获取到后继节点
  getSuccessor(delNode) {
    let current = delNode.right;
    let successor = null;

    while(current) {
      successor = current;
      current = current.left;
      if(current) {
        current.parent = successor;
      }
    }

    // 拿到了后继节点
    if(successor !== delNode.right) {
      successor.parent.left = successor.right;
      successor.right = delNode.right;
    }

    successor.left = delNode.left;

    return successor;
  }

  // 搜索特定的值
  search(value) {
    let current = this.root;
    let parent = null;

    while(current) {
      // 如果找到current，直接返回即可
      if(current.value === value) {
        return current;
      }

      // 2.继续向下找
      parent = current;
      if(current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }

      // 如果current有值，那么current保存自己的父节点
      if(current) current.parent = parent;
    }

    return null;
  }

  // 实现删除操作
  remove(value) {
    // 1.搜索：当前是否有这个value
    const current = this.search(value);
    if(!current) return false;

    // 2.获取到三个东西：当前节点/父节点/是属于父节点的左子节点，还是右子节点
    // 2.如果删除的是叶子节点
    if(current.left === null && current.right === null) {
      if(current === this.root) { // 根节点
        this.root = null;
      } else if(current.isLeft) { // 父节点的左子节点
        current.parent.left = null;
      } else {
        current.parent.right = null;
      }
    }

    // 3.只有一个子节点：只有左子节点
    else if(current.right === null) {
      if(current === this.root) {
        this.root = current.left;
      } else if(current.isLeft) {
        current.parent.left = current.left;
      } else {
        current.parent.right = current.left;
      }
    }

    // 4.只有一个子节点：只有右子节点
    else if(current.left === null) {
      if(current === this.root) {
        this.root = current.right
      } else if(current.isLeft) {
        current.parent.left = current.right;
      } else {
        current.parent.right = current.right;
      }
    }

    // 5.有两个子节点
    else {
      const successor = this.getSuccessor(current);
      if(current === this.root) {
        this.root = successor;
      } else if(current.isLeft) {
        current.parent.left = successor;
      } else {
        current.parent.right = successor;
      }
    }

    return true;
  }
}

const bsTree = new BSTree();

bsTree.insert(11)
bsTree.insert(7)
bsTree.insert(15)
bsTree.insert(5)
bsTree.insert(3)
bsTree.insert(9)
bsTree.insert(8)
bsTree.insert(10)
bsTree.insert(13)
bsTree.insert(12)
bsTree.insert(14)
bsTree.insert(20)
bsTree.insert(18)
bsTree.insert(25)
bsTree.insert(6)

// bsTree.preOrderTraverse()
// bsTree.inOrderTraverse()
// bsTree.postOrderTraverse()
// bsTree.levelOrderTraverse()
// console.log(bsTree.getMaxValue());
// console.log(bsTree.getMinValue());
// console.log(bsTree.search(14));

bsTree.remove(20);
bsTree.print();