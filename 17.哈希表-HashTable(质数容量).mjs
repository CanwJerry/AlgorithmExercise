// 判断一个数字是否为质数（只能被1和本身整除）
function isPrime(num) {
  const sqrt = Math.sqrt(num);
  for(let i = 2; i <= sqrt; i++) {
    if(num % i === 0) {
      return false;
    }
  }

  return true;
}

// 我给你传入一个数字，你告诉我下一个质数是谁
function getNextPrime(num) {
  let newPrime = num;
  while(!isPrime(newPrime)) {
    newPrime++;
  }

  return newPrime;
}

console.log(getNextPrime(8));