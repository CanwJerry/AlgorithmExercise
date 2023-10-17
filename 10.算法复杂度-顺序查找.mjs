// 顺序查找(找到数组中对应的值并返回位置索引)
function sequentSearch(array, num) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === num) {
      return i;
    }
  }

  return -1;
}

// const index = sequentSearch([1,2,345,66,123,22,55,66,77], 22);
// console.log(index);

export default sequentSearch;

