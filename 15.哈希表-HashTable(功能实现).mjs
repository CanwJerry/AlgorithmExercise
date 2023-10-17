class HashTable {
  constructor() {
    // 用来存放链地址法的链
    this.storage = [];
    
    // 数组的长度
    this.length = 7;
    
    // 当前存放元素的个数
    this.count = 0;
  }

  // 将key映射成对应的索引值
  hashFun(key, max) {
    let hashCode = 0;

    for(let i = 0; i < key.length; i++) {
      hashCode = 31*hashCode + key.charCodeAt(i);
    }

    const index = hashCode % max;

    return index;
  };

  // TODO:扩容缩容
  resize(newLength) {
    // 赋值新长度
    this.length = newLength;

    // 先将之前数组保存起来，因为会将storage = []
    const oldStorage = this.storage;

    // 重置之前的属性值
    this.storage = [];
    this.count = 0;
   
    // 遍历所有的数据项，重新插入到哈希表中
    oldStorage.forEach(bucket => {
      if(!bucket) return;

      for(let i = 0; i < bucket.length; i++) {
        const tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    })
  };

  // 插入、修改
  put(key, value) {
    let index = this.hashFun(key, this.length);
    // 1.查找当前索引是否存在数组
    let bucket = this.storage[index];
    
    // 2.判断是否有bucket
    if(!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }
  
    // 3.有bucket,并且找到对应的key
    let isUpdate = false;
    for(let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      if(tupleKey === key) {
        tuple[1] = value;
        isUpdate = true;
      }
    }
  
    // 4.有bucket,但是找不到对应的key
    if(!isUpdate) {
      bucket.push([key, value]);
      this.count++;

      // TODO:判断是否需要扩容
      const loadFactor = this.count / this.length;
      if(loadFactor > 0.75) {
        this.resize(this.length * 2);
      }
    }
  }

  // 获取值
  get(key) {
    // 根据key获取hashCode(也就是index)
    const index = this.hashFun(key, this.length);
    
    // 根据index取出bucket
    const bucket = this.storage[index];
    
    // 如果bucket都是null，那么说明这个位置之前并没有插入过数据
    if(!bucket) return null;

    // 有了bucket，就遍历，并且如果找到，就将对应的value返回即可
    for(let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      if(tupleKey === key) {
        return tuple[1];
      }
    }

    // 没有找到，返回null (index在获取的时候有可能会拿到相同的索引, 所以要多这一步)
    return null;
  };

  // 删除操作
  del(key) {
    // 根据key获取hashCode(也就是index)
    const index = this.hashFun(key, this.length);

    // 根据index取出bucket
    const bucket = this.storage[index];

    if(!bucket) return undefined;

    for(let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      if(tupleKey === key) {
        bucket.splice(i, 1);
        this.count--;

        // TODO:判断是否需要缩容
        const loadFactor = this.count / this.length;
        if(loadFactor < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2));
        }

        return tuple[1];
      }
    }

    return undefined;
  }
}

const hashTable = new HashTable();

hashTable.hashFun('abc', 7);

hashTable.put('abc', 100)
// cba跟ddg的索引是一样的
hashTable.put('cba', 200)
hashTable.put('ddg', 400)

hashTable.put('rrg', 420)
hashTable.put('ttg', 430)
hashTable.put('yyg', 440)
hashTable.put('uug', 450)
hashTable.put('iig', 460)

console.log('del:', hashTable.del('abc'));
console.log('del:', hashTable.del('rrg'));
console.log('del:', hashTable.del('ttg'));
console.log('del:', hashTable.del('yyg'));
console.log('del:', hashTable.del('uug'));
console.log('del:', hashTable.del('iig'));

console.log('get:', hashTable.get('ddd'));

console.log('storage:', hashTable.storage);

export default HashTable;