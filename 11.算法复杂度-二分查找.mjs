function binarySearch(array, num) {
 let left = 0;
 let right = array.length - 1;

 while(left <= right) {
  let mid = Math.floor((left + right) / 2);
  const midNum = array[mid];

  if(midNum === num) {
    return mid;
  } else if(midNum < num) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
 }

 return -1;
}

// const index = binarySearch([1,2,3,4,5,6,7,8,9], 5);
// console.log(index);

export default binarySearch;
