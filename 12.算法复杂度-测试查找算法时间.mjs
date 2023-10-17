import sequentSearch from "./10.算法复杂度-顺序查找.mjs";
import binarySearch from "./11.算法复杂度-二分查找.mjs";

let arr = new Array(10000000).fill(0).map((x, i) => i);
let target = 5000000;

let start = performance.now();

let index = sequentSearch(arr, target);

// let index = binarySearch(arr, target);

let end = performance.now();

console.log(`sequentSearch 目标元素：${index}`);
console.log(`sequentSearch 查找时间：${end - start}ms`);

// console.log(`binarySearch 目标元素：${index}`);
// console.log(`binarySearch 查找时间：${end - start}ms`);