// 哈希函数，将key映射成index
function hashFun(key, max) {
  let hashCode = 0;

  for(let i = 0; i < key.length; i++) {
    // 霍纳法则计算哈希code
    hashCode = 31 * hashCode + key.charCodeAt(i);
  }

  const index = hashCode % max;

  return index;
}

console.log(hashFun('abc', 7));

export default hashFun;