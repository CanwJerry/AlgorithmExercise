class HashTable {
  constructor() {
    // 用来存放链地址法的链
    this.storage = [];
    
    // 数组的长度
    this.length = 7;
    
    // 当前存放元素的个数
    this.count = 0;
  }
}

export default HashTable;